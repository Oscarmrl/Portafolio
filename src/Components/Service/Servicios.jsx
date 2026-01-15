import { Data_Servicios } from "./Data_Servicios";
import { motion } from "framer-motion";

export default function Servicios() {
  return (
    <>
      <div className="bg-primary mx-auto h-auto w-auto flex flex-col py-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className="text-3xl font-bold text-center text-base-content mb-10"
        >
          Habilidades
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {Data_Servicios.map((servicio, index) => {
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-base-100 rounded-xl p-6 shadow-lg border border-neutral/20 hover:border-primary/50 transition-all duration-300 cursor-pointer h-full flex flex-col items-center text-center group-hover:shadow-xl relative overflow-hidden">
                  {/* Efecto de brillo en hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {servicio.logo}
                  </div>
                  
                  <h3 className="text-xl font-bold text-base-content mb-3 group-hover:text-base-content transition-colors">
                    {servicio.titulo}
                  </h3>
                  
                  <p className="text-base-content/80 flex-grow">
                    {servicio.descripcion}
                  </p>
                  
                  {/* Indicador de hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
