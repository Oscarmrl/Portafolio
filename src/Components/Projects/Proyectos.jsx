import proyectos from "./Data_proyectos";
import { useState } from "react";
import { getIcon } from "./Icons";

export default function Proyectos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? proyectos.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === proyectos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" bg-base-100">
      <h2 className="seccion">Proyectos</h2>

      <div className="bg-primary sm:w-2/3 md:w-3/4 mx-auto rounded-badge flex flex-col items-center shadow-2xl">
        <div className="flex flex-col md:flex-row w-full">
          <figure className=" md:w-full ">
            <img
              src={proyectos[currentIndex].img}
              alt="Album"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="flex flex-col w-full gap-4 justify-center items-center">
            <h2 className="text-center text-3xl font-mono ">
              {proyectos[currentIndex].nombre}
            </h2>
            <p className=" text-center text-lg   break-words m-2 h-[170px] overflow-auto">
              {proyectos[currentIndex].descripcion}
            </p>

            <h3 className="text-start text-3xl font-mono ">Tecnologías:</h3>

            <div className="flex gap-2 p-1 flex-wrap justify-center ">
              {proyectos[currentIndex].tecnologias.map((tech, index) => (
                <button key={index} className="btn btn-outline">
                  {getIcon(tech)}
                </button>
              ))}
            </div>

            <div className=" mb-5">
              <a
                href={proyectos[currentIndex].url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent mr-2 font-mono "
              >
                Ver Proyecto
              </a>
              <a
                href={proyectos[currentIndex].codigo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent font-mono "
              >
                Código Fuente
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-2">
        <button onClick={handlePrevClick} className="btn btn-circle">
          ❮
        </button>
        <button onClick={handleNextClick} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
  );
}
