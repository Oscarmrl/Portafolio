import proyectos from "./Data_proyectos";
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
      rotateY: 0,
      opacity: 1,
    },
    exit: {
      rotateY: 90,
      opacity: 0,
    },
    enter: {
      rotateY: -90,
      opacity: 0,
    },
    animate: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 1.2, type: "spring" },
    },
  };

  return (
    <div className=" bg-base-100">
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
        className="bg-primary sm:w-2/3 md:w-3/4 mx-auto rounded-badge flex flex-col items-center shadow-2xl"
        key={currentIndex}
        initial="enter"
        animate="animate"
        exit="exit"
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row w-full">
          <figure className=" md:w-full ">
            <img
              src={proyectos[currentIndex].img}
              alt="Album"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </figure>
          <div className="flex flex-col w-full gap-4 justify-center items-center">
            <motion.h2
              className="text-center text-3xl font-mono py-2 "
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
              className=" text-center text-lg   break-words m-2 h-[170px] overflow-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.0 }}
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
              className="text-start text-3xl font-mono "
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
              className="flex gap-2 p-1 flex-wrap justify-center "
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
      </motion.div>

      <div className="flex justify-center gap-4  m-10">
        <motion.button
          onClick={handlePrevClick}
          className="btn btn-circle"
          initial={{ scale: 1 }}
          whileInView={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.4,
            repeat: 2,
            repeatType: "loop",
          }}
        >
          ❮
        </motion.button>
        <motion.button
          onClick={handleNextClick}
          className="btn btn-circle"
          initial={{ scale: 1 }}
          whileInView={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.4,
            repeat: 2,
            repeatType: "loop",
          }}
        >
          ❯
        </motion.button>
      </div>
    </div>
  );
}
