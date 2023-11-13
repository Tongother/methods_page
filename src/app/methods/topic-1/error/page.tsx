"use client"
import TopicNav1 from "@/src/components/TopicNav1"
import { motion } from "framer-motion"

export default function Topic1() {
  const cantidadMedidas = ['2', '3', '4', '5', '6', '7', '8'];

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

          <motion.div className="w-[40%] h-[85%] border-r border-white">
            <motion.h1 className="pl-6 pt-6 text-white">Selecciona la cantidad de medidas:
            
            <motion.select
              id="frutas"
              name="frutas"
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
                <motion.input type="number" min={1} max={100} className="w-[5em] h-[2em] border-2 border-violet-500 text-black ml-4"></motion.input>
            </motion.h1>
            
          </motion.div>
          </div>
          </div>
    )
}