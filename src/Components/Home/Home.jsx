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
      <section className="mt-12 md:mt-5  bg-primary container mx-auto rounded-badge flex flex-col gap-4 items-center justify-center min-h-screen shadow-2xl overflow-hidden">
        <div className="flex flex-wrap flex-col md:flex-row-reverse items-center justify-center text-center md:text-left gap-4">
          <div className="relative flex items-center justify-center overflow-visible p-10">
            <div className="absolute w-48 h-48 rounded-full border-4 border-dashed border-secondary animate-spin-slow-reverse"></div>
            <div className="absolute w-64 h-64 rounded-full border-4 border-dash-large border-dashed border-secondary animate-spin-slow"></div>

            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4  shadow-lg">
              <img
                src="/Portafolio/images-webp/yo.webp"
                alt="Foto de perfil"
                className="w-full h-full "
                loading="lazy"
              />
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hola, soy Oscar Murillo
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

        <div className=" m-5">
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
