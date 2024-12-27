import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  // funcion para descargar el CV

  const descargarCV = () => {
    const link = document.createElement("a"); //creando un elemento
    link.href = "/Portafolio/123.pdf"; // Ruta del archivo
    link.download = "MiCV.pdf"; // Nombre del archivo al descargar

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="mt-13 bg-primary container mx-auto rounded-badge flex flex-col gap-4 items-center justify-center min-h-screen shadow-2xl md:mt-4">
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
          <a href="https://github.com/Oscarmrl" target="_blank">
            <button className="btn glass btn-circle btn-outline">
              <FaGithub className="h-6 w-6" />
            </button>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100024806562775"
            target="_blank"
          >
            <button className="btn glass btn-circle btn-outline">
              <FaFacebookSquare className="h-6 w-6" />
            </button>
          </a>

          <a href="https://www.instagram.com/" target="_blank">
            <button className="btn glass btn-circle btn-outline">
              <FaInstagram className="h-6 w-6" />
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/oscar-murillo-3885b4294/"
            target="_blank"
          >
            <button className="btn glass btn-circle btn-outline">
              <FaLinkedinIn className="h-6 w-6" />
            </button>
          </a>
        </div>

        <div>
          <button
            className=" btn rounded-2xl btn-outline"
            onClick={descargarCV}
          >
            Download CV
          </button>
        </div>
      </section>
    </>
  );
}
