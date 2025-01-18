import React, { useRef } from "react";
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
  const tecnologias = [
    { name: "JavaScript", icon: IoLogoJavascript },
    { name: "HTML5", icon: IoLogoHtml5 },
    { name: "CSS3", icon: IoLogoCss3 },
    { name: "Node.js", icon: IoLogoNodejs },
    { name: "React", icon: IoLogoReact },
    { name: "TailwindCSS", icon: RiTailwindCssFill },
    { name: "TypeScript", icon: BiLogoTypescript },
    { name: "GitHub", icon: IoLogoGithub },
    { name: "MySQL", icon: SiMysql },
  ];

  return (
    <div className="m-5 flex flex-wrap gap-3 justify-center">
      {tecnologias.map((tech, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        return (
          <motion.button
            ref={ref}
            key={index}
            className="btn btn-outline"
            title={tech.name}
            initial={{ opacity: 0, y: index % 2 === 0 ? 50 : -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
          >
            <tech.icon className="h-8 w-10" />
          </motion.button>
        );
      })}
    </div>
  );
}
