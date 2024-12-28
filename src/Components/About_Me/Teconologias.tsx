import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { SiMysql } from "react-icons/si";

export default function Teconologias() {
  return (
    <div className="m-5 flex flex-wrap gap-3 justify-center">
      <button className="btn btn-outline">
        <IoLogoJavascript className="h-8 w-10" />
      </button>
      <button className="btn btn-outline">
        <IoLogoHtml5 className="h-8 w-10" />
      </button>
      <button className="btn btn-outline">
        <IoLogoCss3 className="h-8 w-10" />
      </button>
      <button className="btn btn-outline">
        <IoLogoNodejs className="h-8 w-10" />
      </button>
      <button className="btn btn-outline">
        <IoLogoReact className="h-8 w-10" />
      </button>
      <button className="btn btn-outline">
        <RiTailwindCssFill className="h-8 w-10" />
      </button>
      <button className="btn btn-outline">
        <BiLogoTypescript className="h-8 w-10" />
      </button>
      <button className="btn btn-outline">
        <IoLogoGithub className="h-8 w-10" />
      </button>
      <button className="btn btn-outline">
        <SiMysql className="h-8 w-10" />
      </button>
    </div>
  );
}
