"use client"
import { useEffect, useRef } from "react";
import TopicNav1 from "@/src/components/TopicNav1"
import { motion } from "framer-motion"
import { manejadorDeInputs } from "@/src/hooks/manejadorDeInputs";
import ThemeTopic from "@/src/components/themeTopic";


export default function Topic1() {
  const cantidadMedidas = ['2', '3', '4', '5', '6', '7', '8'];

  const {selectedMedida, setSelectedMedida, 
    inputValue, setInputValue, 
    isButtonClick, setisButtonClick,
    dataRows, setDataRows} = manejadorDeInputs(cantidadMedidas[0], "", false);
    let arregloX_X:number[] =[], arregloX_X_Potencia:number[] = []

  const h1_Elemento = document.getElementsByClassName("h1_className");
  const h1_Instrumento = document.getElementsByClassName("h1ResultadoInstrumento");
  const h1_Medidor = document.getElementsByClassName("h1ResultadoMedidor");
  const tabla = document.getElementsByClassName("bodyTable");

  const medidaSeleccionadaInt = parseInt(selectedMedida, 10);
  const valorInputFloat = parseFloat(inputValue);
  let promedio = 0;

  useEffect(() => {
    setDataRows([]);

    for (let i = 0; i < h1_Elemento.length; i++) {
      h1_Elemento[i].classList.remove("text-white");
      h1_Elemento[i].textContent = `${i + 1}: `;

      if (medidaSeleccionadaInt > i) {
        h1_Elemento[i].classList.add("text-white");
      }
    }
  }, [medidaSeleccionadaInt]);

  useEffect(() => {
    if (dataRows.length > 0) {
      h1_Elemento[dataRows.length - 1].textContent += `${dataRows[dataRows.length - 1]}`;
    }
  }, [dataRows]);

  const handleSelectChange = (event:any) => {
    setSelectedMedida(event.target.value);
  };

  // Función para manejar el cambio en el input
  const handleInputChange = (event:any) => {
    if (/^\d*\.?\d*$/.test(event.target.value)) {
      setInputValue(event.target.value);
    }
  };

  const enviarMedidas = (event:any) => {
  
    if (!(isNaN(medidaSeleccionadaInt)) && !(isNaN(valorInputFloat)) && (inputValue !== '')) {
        
        if(medidaSeleccionadaInt > dataRows.length){
          setDataRows((prevDataRows) => [...prevDataRows, valorInputFloat]);
      }

    } else {

      alert('Error al convertir valores a enteros');
    }
  };


  const errorAbsoluto = ():any => {
    let eInstrumento = "0.", eMedidor = 0.0, sumaTotalX_XPotencia = 0.0;

    if(dataRows.length > 0){
      for(let i=0; i < dataRows.length; i++){
        promedio += dataRows[i]
      }
      promedio = promedio / medidaSeleccionadaInt;
      
      for(let i=0; i < dataRows.length; i++){
        arregloX_X[i] = dataRows[i] - promedio;
        arregloX_X_Potencia[i] = Math.pow(arregloX_X[i], 2);
        sumaTotalX_XPotencia += arregloX_X_Potencia[i];
      }

      for(let i=0; i < medidaSeleccionadaInt; i++){
        const fila = document.createElement('tr');

        const celda1 = document.createElement('td');
        celda1.className = 'border border-white text-white text-center';
        celda1.textContent = dataRows[i].toString();
      
        const celda2 = document.createElement('td');
        celda2.className = 'border border-white text-white text-center';
        celda2.textContent = arregloX_X[i].toString();
      
        const celda3 = document.createElement('td');
        celda3.className = 'border border-white text-white text-center';
        celda3.textContent = arregloX_X_Potencia[i].toString();
      
        // Agregar las celdas a la fila
        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        tabla[0].appendChild(fila);
      }
      setisButtonClick(true);
      let cantidadDecimales = 0;

      for (let i = 0; i < dataRows.length; i++) {
        let arregloCaracteres = dataRows[i].toString().split('');
        let numD = 0;
        let contador = false;

        for (let j = 0; j < arregloCaracteres.length; j++) {
          let c = arregloCaracteres[j];

          if (contador) {
            numD++;
            if (numD > cantidadDecimales) cantidadDecimales = numD;
          }

          if (c === '.') contador = true;
        }
      }

      for (let i = 0; i < cantidadDecimales; i++) {
        if (i + 1 === cantidadDecimales) {
          eInstrumento += "1";
          break;
        }
        eInstrumento += "0";
      }
      
      eMedidor = Math.sqrt(sumaTotalX_XPotencia / (medidaSeleccionadaInt * (medidaSeleccionadaInt - 1)));
      eMedidor = Math.round(eMedidor * Math.pow(10, cantidadDecimales)) / Math.pow(10, cantidadDecimales);

      h1_Instrumento[0].textContent = `eInstrumento: ${eInstrumento}`;
      h1_Medidor[0].textContent = `eMedidor: ${eMedidor}`;



    }else{
      alert("Por favor, coloque las medidas correspondientes")
    }
  };


    return (
    <div className="flex">
          <div className="">
            <TopicNav1/>
          </div>

          <div className="w-[100%]">
          <ThemeTopic topic="AROXIMACIÓN DE ERROR"/>

          <div className="w-full h-[85%] grid grid-cols-2">
          <motion.div className="w-[22em] h-[100%] border-r border-white">

            <motion.h1 className="pl-6 pt-6 text-white">Selecciona la cantidad de medidas:
            
            <motion.select
              id="frutas"
              name="frutas"
              onChange={handleSelectChange}
              className="border-2 border-violet-500 text-black ml-4">
              {cantidadMedidas.map((medida, index) => (
              <motion.option
                key={index}
                value={medida}
              >
              {medida}
              </motion.option>
              ))}
            </motion.select>

            </motion.h1>

            <motion.h1 className="pl-6 pt-6 text-white">Coloque la medida:
                <motion.input type="text" onChange={handleInputChange} value={inputValue} min={1} max={100} className="w-[5em] h-[2em] border-2 border-violet-500 text-black ml-4"></motion.input>
            </motion.h1>

          <motion.div className="w-full h-[3.5em] grid justify-center items-end">
            <motion.button type="button" className="w-[8em] h-[2em] bg-white" onClick={enviarMedidas}>
              Enviar medida
            </motion.button>
          </motion.div>

          <motion.div className="text-zinc-400 flex mt-12 pl-[7.5em]">
            <motion.div id="cajaDatosInputColumna1" className="w-[40%]">
              <motion.h1 className="h1_className text-white">1: </motion.h1>
              <motion.h1 className="h1_className text-white">2: </motion.h1>
              <motion.h1 className="h1_className">3: </motion.h1>
              <motion.h1 className="h1_className">4: </motion.h1>
            </motion.div>

            <motion.div id="cajaDatosInputColumna2" className="w-[40%]">
              <motion.h1 className="h1_className">5:</motion.h1>
              <motion.h1 className="h1_className">6: </motion.h1>
              <motion.h1 className="h1_className">7: </motion.h1>
              <motion.h1 className="h1_className">8: </motion.h1>
            </motion.div>
          </motion.div>

          <motion.div className="w-full h-[3.5em] grid justify-center items-end">
            <motion.button type="button" className="w-[10em] h-[2em] bg-white" onClick={() => {errorAbsoluto();}}>
              Mostrar resultados
            </motion.button>
          </motion.div>

          </motion.div>

          <motion.div className="h-[80%] ml-[-2em] grid justify-center mt-12">
              <motion.table
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className=""
              >
                <thead className="text-white">
                  <tr className="">
                    <th className="border border-white">Medidas tomadas</th>
                    <th className="border border-white">x - _x_</th>
                    <th className="border border-white">2^(x - _x_)</th>
                  </tr>
                </thead>
                <tbody className="bodyTable">
                </tbody>
              </motion.table>
              <motion.div className="text-zinc-400">
                <motion.h1 className="h1ResultadoInstrumento">eInstrumento: </motion.h1>
                <motion.h1 className="h1ResultadoMedidor">eMedidor: </motion.h1>
              </motion.div>
          </motion.div>

          </div>
          </div>
          </div>
    )
}