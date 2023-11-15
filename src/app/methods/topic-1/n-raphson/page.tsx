"use client"
import TopicNav1 from "@/src/components/TopicNav1";
import ThemeTopic from "@/src/components/themeTopic";
import { motion } from "framer-motion"
import { manejadorDeInputs } from "@/src/hooks/manejadorDeInputs";
import * as math from "mathjs";

export default function Topic1() {
  const handleInputChange1 = (event:any) => {
    setInputValue1(event.target.value);
  };
  
  const handleInputChange2 = (event:any) => {
    setInputValue2(event.target.value);
  };

  const handleInputChange3 = (event:any) => {
    setInputValue3(event.target.value);
  };
  

  const { inputValue: inputValue1, setInputValue: setInputValue1, isButtonClick, setisButtonClick } = manejadorDeInputs("", "", false);
  const { inputValue: inputValue2, setInputValue: setInputValue2 } = manejadorDeInputs("", "", false);
  const { inputValue: inputValue3, setInputValue: setInputValue3 } = manejadorDeInputs("", "", false);

  const theadTable = document.getElementsByClassName("theadTable");
  const bodyTable = document.getElementsByClassName("bodyTable");

  function newton_raphson (){
    let funcionString = math.parse(inputValue1);

    let funcionDerivada = math.derivative(funcionString, "x");
    let cantidadInicial = parseFloat(inputValue2), 
    iteraciones = parseInt(inputValue3);

    let resultadoFuncionDespejada:any[] = [], 
    resultadoFuncionDerivadaDespejada:any[] = [],
    expresionXi_1:any[] = [], 
    expresionError:any[] = [];

    let scopeX = {x: cantidadInicial}

        const fila = document.createElement('tr');

        const celda1 = document.createElement('td');
        celda1.className = 'border border-white text-white text-center';
        celda1.textContent = "f(x)";
      
        const celda2 = document.createElement('td');
        celda2.className = 'border border-white text-white text-center';
        celda2.textContent = "f'(x)";
      
        const celda3 = document.createElement('td');
        celda3.className = 'border border-white text-white text-center';
        celda3.textContent = "xi + 1";

        const celda4 = document.createElement('td');
        celda4.className = 'border border-white text-white text-center';
        celda4.textContent = "Error";

        const celda5 = document.createElement('td');
        celda5.className = 'border border-white text-white text-center';
        celda5.textContent = "E%";

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        theadTable[0].appendChild(fila);

    for(let i=0; i<= iteraciones; i++){
      resultadoFuncionDespejada[i] = funcionString.evaluate(scopeX);
      resultadoFuncionDerivadaDespejada[i] = funcionDerivada.evaluate(scopeX);

      expresionXi_1[i] = scopeX.x - (resultadoFuncionDespejada[i]/resultadoFuncionDerivadaDespejada[i]);
      expresionError[i] = (expresionXi_1[i] - scopeX.x)/expresionXi_1[i]

      scopeX.x = expresionXi_1[i];
    }

    for(let i=0; i<= iteraciones; i++){
      const fila = document.createElement('tr');

        const celda1 = document.createElement('td');
        celda1.className = 'border border-white text-white text-center';
        celda1.textContent = `${resultadoFuncionDespejada[i]}`;
      
        const celda2 = document.createElement('td');
        celda2.className = 'border border-white text-white text-center';
        celda2.textContent = `${resultadoFuncionDerivadaDespejada[i]}`;
      
        const celda3 = document.createElement('td');
        celda3.className = 'border border-white text-white text-center';
        celda3.textContent = `${expresionXi_1[i]}`;

        const celda4 = document.createElement('td');
        celda4.className = 'border border-white text-white text-center';
        celda4.textContent = `${expresionError[i]}`;

        const celda5 = document.createElement('td');
        celda5.className = 'border border-white text-white text-center';
        celda5.textContent = `${(expresionError[i]*100)}`;

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        theadTable[0].appendChild(fila);
    }

  }

    return (
    <div className="flex">
          <div className="">
            <TopicNav1/>
          </div>

          <div className="w-[100%]">
            <ThemeTopic topic="Newton raphson" />
            
            <motion.div className="grid grid-rows-3 justify-center">
              <motion.h1 className="text-white font-bold"> Coloque la función:
                <motion.input type="text" value={inputValue1} onChange={handleInputChange1} className="w-[10em] h-[2em] border-2 border-violet-500 text-black ml-4"></motion.input>
              </motion.h1>

              <motion.h1 className="text-white font-bold">Coloque la cantidad inicial:
                <motion.input type="text" value={inputValue2} onChange={handleInputChange2} className="w-[10em] h-[2em] border-2 border-violet-500 text-black ml-4"></motion.input>
              </motion.h1>

              <motion.h1 className="text-white font-bold">Iteraciones {"(entero)"}:
                <motion.input type="text" value={inputValue3} onChange={handleInputChange3} className="w-[10em] h-[2em] border-2 border-violet-500 text-black ml-4"></motion.input>
              </motion.h1>

              <motion.div className="w-full h-[3em] grid justify-center items-end">
                <motion.button type="button" className="w-[10em] h-[2em] bg-white" onClick={() => {newton_raphson(); setisButtonClick(!isButtonClick)}}>
                  Mostrar resultados
                </motion.button>
              </motion.div>
            </motion.div>

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