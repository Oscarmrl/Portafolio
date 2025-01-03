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
    <div className=" bg-base-100 min-h-screen">
      <h2 className="seccion">Proyectos</h2>

      <div className=" flex flex-col items-center md:items-start bg-primary shadow-xl m-10 rounded-badge ">
        <div className=" flex flex-col gap-2 md:flex-row md:gap-2">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>

          <div className="flex flex-col ">
            <h2 className="text-start text-2xl font-mono">
              {proyectos[currentIndex].nombre}
            </h2>
            <p>{proyectos[currentIndex].descripcion}</p>

            <h3 className=" text-start text-2xl font-mono">Tecnologias:</h3>

            <div className="flex gap-2">
              {proyectos[currentIndex].tecnologias.map((tecnolo, index) => (
                <button key={index} className="btn btn-outline">
                  {getIcon(tecnolo)}
                </button>
              ))}
              {/* <button className="btn btn-outline">
                <IoLogoJavascript className="h-4 w-4" />
              </button> */}
            </div>
          </div>

          <div className="card-actions justify-end  self-end">
            <button className="btn btn-primary" onClick={handlePrevClick}>
              Atras
            </button>
            <button className="btn btn-primary" onClick={handleNextClick}>
              Siguiente
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-5">
        <a href="#slide4" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide2" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
}
