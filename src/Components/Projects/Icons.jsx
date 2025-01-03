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

const iconMap = {
  javascript: <IoLogoJavascript className="h-4 w-4" />,
  html5: <IoLogoHtml5 className="h-4 w-4" />,
  css3: <IoLogoCss3 className="h-4 w-4" />,
  react: <IoLogoReact className="h-4 w-4" />,
  tailwind: <RiTailwindCssFill className="h-4 w-4" />,
  nodejs: <IoLogoNodejs className="h-4 w-4" />,
  github: <IoLogoGithub className="h-4 w-4" />,
  typescript: <BiLogoTypescript className="h-4 w-4" />,
  mysql: <SiMysql className="h-4 w-4" />,
};

export const getIcon = (tech) => iconMap[tech] || null;
