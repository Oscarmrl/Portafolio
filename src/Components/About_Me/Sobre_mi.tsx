import React from "react";
import Teconologias from "./Teconologias";
import { motion } from "motion/react";

export default function Sobre_mi() {
  return (
    <>
      <div className="bg-base-100  md:min-h-screen flex justify-center items-center flex-col mt-10 ">
        <div className=" flex flex-col items-center md:flex-row w-5/6 gap-4">
           <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1.1,
              rotate: -5,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
            }}
            transition={{
              duration: 1.5,
              type: "spring",
              stiffness: 80,
              damping: 10,
            }}
            className="avatar m-5 w-48 md:w-60 md:h-72"
          >
             <div className="shadow-2xl border-4 border-primary object-cover rounded-badge caret-transparent">
               <img
                 src="/Portafolio/images-webp/yo2.webp"
                 alt="Oscar Murillo"
                 loading="lazy"
               />
             </div>
          </motion.div>

          <div>
            <motion.h2
              className="seccion text-4xl font-bold text-center caret-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.2 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              Sobre Mi
            </motion.h2>

            <motion.h3
              initial={{ transform: "translateX(-100px)" }}
              whileInView={{ transform: "translateX(0px)" }}
              transition={{ type: "spring" }}
              className=" text-start text-2xl font-bold md:text-3xl text-secondary font-roboto mb-3 caret-transparent"
            >
              ¿Quién soy yo?
            </motion.h3>

            <motion.p
              initial={{ transform: "translateX(100px)" }}
              whileInView={{ transform: "translateX(0px)" }}
              transition={{ type: "spring" }}
              className="text-start text-2xl font-roboto caret-transparent"
            >
              Mi nombre es Oscar Murillo. y soy un desarrollador web con
              experiencia en la creación de sitios web y aplicaciones web. en
              general la programacion me encanta y me gusta aprender cosas
              nuevas. en este extenso mundo de la tecnologia me gustaria formar
              parte de un equipo de desarrollo y poder contribuir con mis
              conocimientos y habilidades para crear algo nuevo y innovador.
            </motion.p>

            <h3 className=" text-start text-2xl font-bold text-secondary font-roboto mt-2 caret-transparent">
              Algunas de las tecnologias que utilizo son:
            </h3>

            <Teconologias />
          </div>
        </div>
      </div>
    </>
  );
}
