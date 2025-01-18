import { Data_Servicios } from "./Data_Servicios";
import { motion } from "framer-motion";

export default function Servicios() {
  return (
    <>
      <div className="bg-primary mx-auto h-auto w-auto flex flex-col">
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
          Habilidades
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 lg:justify-evenly">
          {Data_Servicios.map((servicio, index) => {
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-secondary last:mb-5 w-60 h-60 p-4 text-center rounded-lg shadow-md backdrop-filter backdrop-blur-sm bg-opacity-30 border border-secondary"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <div className="text-4xl mb-2">{servicio.logo}</div>
                <h3 className="text-lg font-roboto font-bold">
                  {servicio.titulo}
                </h3>
                <p className="text-1xl font-roboto">{servicio.descripcion}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
