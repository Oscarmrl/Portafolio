import React, { useRef, useState } from "react";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
  IoLogoGithub,
} from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { motion, useInView } from "framer-motion";

export default function Tecnologias() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const tecnologias = [
    { 
      name: "JavaScript", 
      icon: IoLogoJavascript, 
      color: "#F7DF1E",
      category: "Frontend"
    },
    { 
      name: "HTML5", 
      icon: IoLogoHtml5, 
      color: "#E34F26",
      category: "Frontend"
    },
    { 
      name: "CSS3", 
      icon: IoLogoCss3, 
      color: "#1572B6",
      category: "Frontend"
    },
    { 
      name: "Node.js", 
      icon: IoLogoNodejs, 
      color: "#339933",
      category: "Backend"
    },
    { 
      name: "React", 
      icon: IoLogoReact, 
      color: "#61DAFB",
      category: "Frontend"
    },
    { 
      name: "TailwindCSS", 
      icon: RiTailwindCssFill, 
      color: "#06B6D4",
      category: "Frontend"
    },
    { 
      name: "TypeScript", 
      icon: BiLogoTypescript, 
      color: "#3178C6",
      category: "Frontend"
    },
    { 
      name: "GitHub", 
      icon: IoLogoGithub, 
      color: "#181717",
      category: "Herramientas"
    },
    { 
      name: "MySQL", 
      icon: SiMysql, 
      color: "#4479A1",
      category: "Base de Datos"
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div className="m-5" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-bold text-secondary mb-2">Mis Habilidades Técnicas</h3>
        <p className="text-neutral">Tecnologías que domino y utilizo en mis proyectos</p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {tecnologias.map((tech, index) => {
          const ref = useRef(null);
          const isTechInView = useInView(ref, { once: true });

          return (
            <motion.div
              ref={ref}
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <motion.div
                className="tech-card bg-base-100 rounded-xl p-4 shadow-lg border border-neutral/20 hover:border-primary/50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={isTechInView ? { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0 
                } : {}}
                transition={{ 
                  delay: index * 0.1, 
                  type: "spring", 
                  stiffness: 100,
                  damping: 12
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Efecto de brillo en hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
                <div className="flex flex-col items-center justify-center space-y-3">
                  <motion.div
                    className="p-3 rounded-full tech-icon"
                    style={{ 
                      backgroundColor: `${tech.color}15`,
                      border: `2px solid ${tech.color}30`
                    }}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <tech.icon 
                      className="h-10 w-10" 
                      style={{ color: tech.color }}
                    />
                  </motion.div>
                  
                  <div className="text-center">
                    <h4 className="font-bold text-lg text-secondary group-hover:text-primary transition-colors">
                      {tech.name}
                    </h4>
                    <div className="flex items-center justify-center mt-1">
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-secondary">
                        {tech.category}
                      </span>
                    </div>
                  </div>
                </div>


              </motion.div>
            </motion.div>
          );
        })}
      </div>


    </div>
  );
}
