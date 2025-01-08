import React from "react";
import Teconologias from "./Teconologias";
import { motion } from "motion/react";

export default function Sobre_mi() {
  return (
    <>
      <div className="bg-base-100  md:min-h-screen flex justify-center items-center flex-col mt-10 ">
        <div className=" flex flex-col items-center md:flex-row w-5/6 gap-4">
          <div className="avatar m-5 w-48 md:w-60 md:h-72">
            <div className="mask mask-squircle">
              <img src="/Portafolio/yo.jpeg" />
            </div>
          </div>

          <div>
            <h2 className="seccion">Sobre Mi</h2>

            <h3 className=" text-start text-2xl font-bold md:text-3xl text-secondary font-mono mb-3">
              ¿Quién soy yo?
            </h3>

            <p className="text-start text-2xl">
              Mi nombre es Oscar Murillo. y soy un desarrollador web con
              experiencia en la creación de sitios web y aplicaciones web. en
              general la programacion me encanta y me gusta aprender cosas
              nuevas. en este extenso mundo de la tecnologia me gustaria formar
              parte de un equipo de desarrollo y poder contribuir con mis
              conocimientos y habilidades para crear algo nuevo y innovador.
            </p>

            <h3 className=" text-start text-2xl font-bold text-secondary font-mono mt-2">
              Algunas de las tecnologias que utilizo son:
            </h3>

            <Teconologias />
          </div>
        </div>
      </div>
    </>
  );
}
