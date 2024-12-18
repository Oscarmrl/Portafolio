import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="mt-13 bg-primary container mx-auto rounded-xl flex flex-col gap-4 items-center justify-center min-h-screen shadow-lg md:mt-4">
        <div className="flex flex-wrap flex-col md:flex-row-reverse items-center justify-center text-center md:text-left gap-4">
          <div className="avatar">
            <div className="w-57 h-48 rounded-full">
              <img src="/Portafolio/yo.jpeg" />
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hola, soy [Oscar Murillo]
            </h1>
            <p className="text-lg md:text-xl mb-3 text-secondary">
              Desarrollador Web | Diseñador | Creador de soluciones digitales
            </p>
          </div>
        </div>

        <div className=" flex flex-row gap-2">
          <button className="btn glass btn-circle">
            <FaGithub className="h-6 w-6" />
          </button>
          <button className="btn glass btn-circle">
            <FaFacebookSquare className="h-6 w-6" />
          </button>
          <button className="btn glass btn-circle">
            <FaInstagram className="h-6 w-6" />
          </button>
          <button className="btn glass btn-circle">
            <FaLinkedinIn className="h-6 w-6" />
          </button>
        </div>
      </section>
    </>
  );
}
