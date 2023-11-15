"use client"
import NavBar from "@/src/components/NavBar";
import { motion } from "framer-motion";
import {useEffect} from "react";
import { manejadorDeInputs } from "@/src/hooks/manejadorDeInputs";

export default function Home() {

  const {isButtonClick: VentanaCarga, setisButtonClick: setVentanaCarga } = manejadorDeInputs("", "", false);

    useEffect(() => {
      setVentanaCarga(true);
    }, [])

    return (
    <div>
          <div className="" id="ComponenteNav">
            <NavBar></NavBar>
          </div>

          <div className="w-[100%] h-[50vh]">
            <div className="h-[50%] flex justify-center items-end">
              <motion.h1 className="text-white font-bold text-5xl"
                          initial={{ y: -100, opacity: 0 }}
                          animate={{ y: VentanaCarga ? 0 : -100, 
                                     opacity: VentanaCarga ? 1: 0}}
                          transition={{
                            duration: 0.8,
                            delay: 0,
                            ease: [0, 0.71, 0.2, 1.01]
                          }}>¡Somos estudiantes UNACH!
              </motion.h1>
            </div>

            <div className="w-[100%] text-center">
              <motion.h1 className="text-zinc-400 text-xl mx-20 mt-20 h-[5em] border-b"
                          initial={{ y: -100, opacity: 0 }}
                          animate={{ y: VentanaCarga ? 0 : -100, 
                                     opacity: VentanaCarga ? 1: 0}}
                          transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                          }}>
              El team WindCode es: Gunther Nettel Rosario, Julian Antonio Castro Alonso, Cristian Emanuel Alfonsin Hernandez del 3°O de la Licenciatura en Ingenieria en Desarrollo y tecnologías de software. Puedes localizarnos aquí:
              </motion.h1>
              <div className="w-full mt-4 flex justify-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.431669113515!2d-93.1577456844766!3d16.755185871945255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd90d0056a675%3A0xff280abff951f60!2sFacultad%20De%20Ingenier%C3%ADa%20C-I%20UNACH!5e0!3m2!1ses!2smx!4v1700027288744!5m2!1ses!2smx" width="600" height="450" className="border" loading="lazy"></iframe>
              </div>
            </div>
          </div>
    </div>
    )
}
