import React from "react";

export default function Sobre_mi() {
  return (
    <>
      <div className="bg-base-100 h-screen flex justify-center items-center">
        <div className=" flex flex-col items-center md:flex-row w-5/6 ">
          <div className="avatar m-5 w-48 md:w-60 md:h-72">
            <div className="mask mask-squircle">
              <img src="/Portafolio/yo.jpeg" />
            </div>
          </div>
          <div>
            <h2 className="divider divider-success text-2xl uppercase font-bold md:text-4xl ml-4 mr-4">
              Sobre Mi
            </h2>

            <h3 className=" text-start text-2xl font-bold md:text-3xl text-secondary">
              ¿Quién soy yo?
            </h3>

            <p className="text-start">
              Mi nombre es Oscar Murillo. y soy un desarrollador web con
              experiencia en la creación de sitios web y aplicaciones web. en
              general la programacion me encanta y me gusta aprender cosas
              nuevas. en este extenso mundo de la tecnologia me gustaria formar
              parte de un equipo de desarrollo y poder contribuir con mis
              conocimientos y habilidades para crear algo nuevo y innovador
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
