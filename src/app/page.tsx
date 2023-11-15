"use client"
import * as React from "react";
import NavBar from "../components/NavBar";
import { motion, useAnimation, useInView } from "framer-motion";
import {useEffect, useRef} from "react"
import { manejadorDeInputs } from "../hooks/manejadorDeInputs";
import { EjemploGaleria } from "../components/galleryImg/ejemploGaleria";
import "./../components/galleryImg/styles.css"

export default function Home() {

  const {isButtonClick: VentanaCarga, setisButtonClick: setVentanaCarga } = manejadorDeInputs("", "", false);

  const ref = useRef();
  const animation = useAnimation();

  useEffect(() => {
    setVentanaCarga(true);
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.9) {
          animation.start({
            opacity: 1,
            transition: {
              duration: 1,
            },
          });
        } else {
          animation.start({ opacity: 0 });
        }
      },
      {
        threshold: 0.9,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animation]);

    return (
    <div>
          <motion.div className="" id="ComponenteNav"
                          initial={{ y: -100, opacity: 0 }}
                          animate={{ y: VentanaCarga ? 0 : -100, 
                                     opacity: VentanaCarga ? 1: 0}}
                          transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                          }}>
            <NavBar></NavBar>
          </motion.div>

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
                          }}>NUMERICAL METHODS</motion.h1>
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
              Mathematical techniques that are used to solve mathematical 
              problems that cannot be solved, or that are very difficult to solve, 
              by analytical means.
              </motion.h1>
            </div>
          </div>

          <motion.div className="h-[80vh] grid grid-cols-2" animate = {animation}>
            <motion.div className="flex flex-wrap justify-center content-start pt-24">
                <motion.h1 className="text-white text-4xl font-extrabold h-[15%]">INTRODUCCIÓN

                </motion.h1>
                <motion.h1 className="text-white text-center w-[80%] text-zinc-400">Desde sus inicios, la humanidad ha estado en la búsqueda de soluciones 
                           reales para todos los problemas matemáticos que se han presentado, sobre 
                           todo en el ámbito científico. Esto ha hecho que la resolución de los mismos 
                           utilicen un lugar muy importante dentro de las matemáticas.

                           El poder encontrar una solución exacta de un problema puede llegar a ser muy 
                           difícil o imposible, y/o puede que no podamos encontrar una respuesta de forma 
                           conveniente en una gran cantidad de aplicaciones reales. Cuando esto sucede, 
                           trataremos de apegarnos a procesos confiables y útiles en donde sus resultados 
                           se aproximen a datos casi exactos y lo suficientemente aceptables.
                </motion.h1>
            </motion.div>

            <motion.div className="example-container">
              <EjemploGaleria></EjemploGaleria>
            </motion.div>
          </motion.div>
    </div>
    )
}
