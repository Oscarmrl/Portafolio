import { proyectos } from "./Data_proyectos";
import { useState } from "react";
import { getIcon } from "./Icons";
import { motion } from "motion/react";

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

  const containerVariants = {
    initial: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      x: -50,
    },
    enter: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="bg-base-100 caret-transparent py-10">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, scale: 1.2 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="seccion"
      >
        Proyectos
      </motion.h2>

      <motion.div
        className="bg-base-100 mx-4 sm:mx-8 md:mx-16 lg:mx-24 rounded-2xl flex flex-col items-center shadow-xl border border-neutral/20"
        key={currentIndex}
        initial="enter"
        animate="animate"
        exit="exit"
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row w-full">
          <figure className="lg:w-full">
            <img
              src={proyectos[currentIndex].img}
              alt={proyectos[currentIndex].nombre}
              className="w-full h-64 md:h-80 lg:h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
              loading="lazy"
            />
          </figure>
          <div className="flex flex-col w-full gap-4 justify-center items-center p-6">
            <motion.h2
              className="text-center text-2xl md:text-3xl font-bold text-base-content py-2"
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
            >
              {proyectos[currentIndex].nombre}
            </motion.h2>
            <motion.p
              className="text-center text-base md:text-lg text-base-content/80 break-words m-2 max-h-48 md:max-h-56 overflow-y-auto px-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              {proyectos[currentIndex].descripcion}
            </motion.p>

            <motion.h3
              className="text-center text-xl md:text-2xl font-bold text-base-content"
              initial={{ x: -100, opacity: 0, scale: 0.8 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
            >
              Tecnologías:
            </motion.h3>

            <div
              className="flex gap-2 p-1 flex-wrap justify-center"
              key={currentIndex}
            >
              {proyectos[currentIndex].tecnologias.map((tech, index) => (
                <motion.button
                  key={index}
                  className="btn btn-outline"
                  title={tech.name}
                  initial={{ opacity: 0, y: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {getIcon(tech)}
                </motion.button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-5 mt-3">
              <a
                href={proyectos[currentIndex].url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent hover:bg-accent/90 font-medium"
              >
                Ver Proyecto
              </a>
              <a
                href={proyectos[currentIndex].codigo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline font-medium"
              >
                Código Fuente
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center gap-6 mt-10 mb-6">
        <motion.button
          onClick={handlePrevClick}
          className="btn btn-circle btn-primary hover:bg-primary/90"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ❮
        </motion.button>
        <motion.button
          onClick={handleNextClick}
          className="btn btn-circle btn-primary hover:bg-primary/90"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ❯
        </motion.button>
      </div>
    </div>
  );
}
