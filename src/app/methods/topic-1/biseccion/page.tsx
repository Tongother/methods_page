"use client"
import TopicNav1 from "@/src/components/TopicNav1"
import ThemeTopic from "@/src/components/themeTopic";
import { motion } from "framer-motion";
import { manejadorDeInputs } from "@/src/hooks/manejadorDeInputs";
import * as math from "mathjs";

export default function Topic1() {

  const { inputValue: inputValue1, setInputValue: setInputValue1, isButtonClick, setisButtonClick } = manejadorDeInputs("", "", false);
  const { inputValue: inputValue2, setInputValue: setInputValue2 } = manejadorDeInputs("", "", false);
  const { inputValue: inputValue3, setInputValue: setInputValue3 } = manejadorDeInputs("", "", false);
  const theadTable = document.getElementsByClassName("theadTable");
  const bodyTable = document.getElementsByClassName("bodyTable");
  var xResultante:any[] = [];
  xResultante[0] = 0;
  let contador = 0;
  let fantasma1:any[] = [];
  let fantasma2:any[] = [];
  let fantasmaFusion:any[] = [];
  let valorMayorqueMenorque:any[] = []

const handleInputChangeFuncion = (event:any) => {
  setInputValue1(event.target.value);
};

const handleInputChangeIntervalo1 = (event:any) => {
  setInputValue2(event.target.value);
};

const handleInputChangeIntervalo2 = (event:any) => {
  setInputValue3(event.target.value);
};

function biseccion () {
  setisButtonClick(false)
  while(bodyTable[0].firstChild){
    bodyTable[0].removeChild(bodyTable[0].firstChild)
  }

  while(theadTable[0].firstChild){
    theadTable[0].removeChild(theadTable[0].firstChild)
  }

    const fila = document.createElement('tr');
    let funcionString = math.parse(inputValue1);

        const celda1 = document.createElement('td');
        celda1.className = 'border border-white text-white text-center';
        celda1.textContent = "X_Resultante";
      
        const celda2 = document.createElement('td');
        celda2.className = 'border border-white text-white text-center';
        celda2.textContent = "Funciones";
      
        const celda3 = document.createElement('td');
        celda3.className = 'border border-white text-white text-center';
        celda3.textContent = "Resultado evaluado";
      
        // Agregar las celdas a la fila
        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        theadTable[0].appendChild(fila);

      let entero1 = parseFloat(inputValue2);
      let entero2 = parseFloat(inputValue3);
      let i = 0;
      for(let i=0; i < 12; i = i + 1){

          xResultante[ i ] = ((entero1 + entero2) / 2);
              
          fDeX(entero1, (xResultante[i]));
      }


      for(let i=0; i < 12; i++){
        const fila = document.createElement('tr');
        const celda1 = document.createElement('td');
        celda1.className = 'border border-white text-white text-center';
        const celda2 = document.createElement('td');
        celda2.className = 'border border-white text-white text-center';
        const celda3 = document.createElement('td');
        celda3.className = 'border border-white text-white text-center';

        celda1.textContent = `${Math.floor((xResultante[i]) * 10000)/10000 }`;
        celda2.textContent = `f(${Math.floor((fantasma1[i]) * 10000)/10000}) * f(${Math.floor(fantasma2[i] * 10000)/10000 })`;
        celda3.textContent = `${(valorMayorqueMenorque[i])}`;
      
        // Agregar las celdas a la fila
        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        bodyTable[0].appendChild(fila);
      }
    
    function fDeX(int1:any, xResultante:any) {
      let scopeX = {x: int1};
      let scopeXResultante = {x: xResultante}
    
      fantasma1[contador] = (funcionString.evaluate(scopeX));
      fantasma2[contador] = (funcionString.evaluate(scopeXResultante));
      fantasmaFusion[contador] = (fantasma1[contador] * fantasma2[contador]);
      
      if (fantasmaFusion[contador] > 0) {
        entero1 = xResultante;
        if (typeof fantasmaFusion[contador] === 'number') {
          valorMayorqueMenorque[contador] = `${Math.floor(fantasmaFusion[contador] * 10000)/10000} < 0`;
        } else {
          alert("no es numero")
        }
      } else if (fantasmaFusion[contador] < 0) {
        entero2 = xResultante;
        if (typeof fantasmaFusion[contador] === 'number') {
          valorMayorqueMenorque[contador] = `${Math.floor(fantasmaFusion[contador] * 10000)/10000} < 0`;
        } else {
          alert("no es numero")
        }
      }

      contador++;
    }
  }

    return (
    <div className="flex">
          <div className="">
            <TopicNav1/>
          </div>
            
          <div className="w-[100%]">
            <ThemeTopic topic="BISECCIÓN"/>
            <motion.div className="h-[15vh] pt-4">
              <motion.div className="grid grid-cols-2 place-items-center">
              <motion.h1 className="text-white font-bold"> Coloque su intervalo 1 inicial {"[--> 0, 0]:"}
                <motion.input type="text" value={inputValue2} onChange={handleInputChangeIntervalo1} className="w-[10em] h-[2em] border-2 border-violet-500 text-black ml-4"></motion.input>
              </motion.h1>

              <motion.h1 className="text-white font-bold text-center">Coloque la funcion que usara en formato SYMPY:
                <motion.input type="text" value={inputValue1} onChange={handleInputChangeFuncion} className="w-[10em] h-[2em] border-2 border-violet-500 text-black ml-4"></motion.input>
              </motion.h1>

              <motion.h1 className="text-white font-bold"> Coloque su intervalo 2 inicial {"[0, 0 <--]:"}
                <motion.input type="text" value={inputValue3} onChange={handleInputChangeIntervalo2} className="w-[10em] h-[2em] border-2 border-violet-500 text-black ml-4"></motion.input>
              </motion.h1>
              </motion.div>

              <motion.div className="w-full h-[3em] grid justify-center items-end">
                <motion.button type="button" className="w-[10em] h-[2em] bg-white" onClick={() => {biseccion(); setisButtonClick(!isButtonClick)}}>
                  Mostrar resultados
                </motion.button>
              </motion.div>
            </motion.div>
            <hr />
            <motion.div className="h-[70vh] flex justify-center items-center">
            <motion.table
                initial={{ opacity: isButtonClick ? 0 : 1, scale: isButtonClick ? 0.5: 0 }}
                animate={{opacity: isButtonClick ? 1 : 1, scale: isButtonClick ? 1: 0  }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
                className="w-[100vh]"
              >
                <motion.thead className="text-white theadTable">
                </motion.thead>
                <motion.tbody className="bodyTable">
                </motion.tbody>
              </motion.table>
            </motion.div>
          </div>
    </div>
    )
}