"use client"
import TopicNav1 from "@/src/components/TopicNav1"
import { motion } from "framer-motion"
import { manejadorDeInputs } from "@/src/hooks/manejadorDeInputs";


export default function Topic1() {
  const cantidadMedidas = ['2', '3', '4', '5', '6', '7', '8'];

  const {selectedMedida, setSelectedMedida, inputValue, setInputValue} = manejadorDeInputs(cantidadMedidas[0], "");

  const handleSelectChange = (event:any) => {
    setSelectedMedida(event.target.value);
  };

  // Función para manejar el cambio en el input
  const handleInputChange = (event:any) => {
    if (/^\d*\.?\d*$/.test(event.target.value)) {
      setInputValue(event.target.value);
    }
  };

  const errorAbsoluto = ():any => {

    const medidaSeleccionadaInt = parseInt(selectedMedida, 10);
    const valorInputInt = parseFloat(inputValue);
  

    if (!(isNaN(medidaSeleccionadaInt)) && !(isNaN(valorInputInt))) {
      agregarFila()
    } else {

      alert('Error al convertir valores a enteros');
    }
  };

  const agregarFila = ():any => {
    if (inputValue !== '') {
      const tablaBody = document.getElementById("tabla");

      const newRow = document.createElement('tr');
      const cell1 = document.createElement('td');
      const cell2 = document.createElement('td');
      const cell3 = document.createElement('td');

      // Establecer el contenido de las celdas
      cell1.textContent = inputValue;
      cell2.textContent = "si";
      cell3.textContent = "no";

      newRow.appendChild(cell1);
      newRow.appendChild(cell2);
      newRow.appendChild(cell3);

      tablaBody?.appendChild(newRow);
    }
  }

    return (
    <div className="flex">
          <div className="">
            <TopicNav1/>
          </div>

          <div className="w-[100%]">
          <div className="w-[100%] h-[15vh] grid items-end">
              <h1 className="text-white text-[32px] font-bold text-center">Error approximations</h1>
              <hr />
          </div>

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
            <motion.button type="button" className="w-[8em] h-[2em] bg-white" onClick={errorAbsoluto}>
              Enviar medida
            </motion.button>
          </motion.div>
          </motion.div>
          
          <motion.div className="ml-[-6.5em]">
              <motion.table
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <thead className="text-white">
                  <tr>
                    <th>Medidas tomadas</th>
                    <th>x - _x_</th>
                    <th>2^(x - _x_)</th>
                  </tr>
                </thead>
                <tbody id="tabla" className="text-white" />
              </motion.table>
          </motion.div>
          </div>
          </div>
          </div>
    )
}