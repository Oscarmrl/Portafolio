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

      <div className=" bg-primary sm:w-2/3 md:w-3/4 mx-auto rounded-badge flex flex-col items-center shadow-2xl">
        <div className="flex flex-col md:flex-row w-full gap-4">
          <figure className=" md:w-full ">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
              className="w-full object-cover"
            />
          </figure>
          <div className="flex flex-col w-full gap-4 justify-center items-center">
            <h2 className="text-center text-2xl font-mono ">
              {proyectos[currentIndex].nombre}
            </h2>
            <p className=" text-center">
              {proyectos[currentIndex].descripcion}
            </p>

            <h3 className="text-start text-2xl font-mono ">Tecnologías:</h3>

            <div className="flex gap-2 ">
              {proyectos[currentIndex].tecnologias.map((tecnolo, index) => (
                <button key={index} className="btn btn-outline">
                  {getIcon(tecnolo)}
                </button>
              ))}
            </div>

            <div className=" mb-5 md:mb-0">
              <a href="" className="btn btn-accent mr-2">
                Ver Proyecto
              </a>
              <a href="" className="btn btn-accent ">
                Código Fuente
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-2">
        <a href="#slide4" onClick={handlePrevClick} className="btn btn-circle">
          ❮
        </a>
        <a href="#slide2" onClick={handleNextClick} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
}
