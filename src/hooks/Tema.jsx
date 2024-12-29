import { useState, useEffect } from "react";

export function Tema() {
  const [tema, setTema] = useState("dark");

  const CambioTema = () => {
    //validando cual de los temas esta seleccionado
    const newTheme = tema === "dark" ? "light" : "dark";
    setTema(newTheme); // cargando el tema seleccionado
    localStorage.setItem("theme", newTheme); //guardando el tema seleccionado en el local storage por si la pagina se recarga
  };

  // efecto para recordar el tema seleccionado y modificarlo cada que se active el interruptor
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
  }, [tema]);

  return [tema, CambioTema];
}
