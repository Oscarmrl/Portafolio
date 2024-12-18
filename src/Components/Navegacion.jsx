import { useState, useEffect } from "react";

export default function Navegacion() {
  const [Tema, setTema] = useState("dark");

  const CambioTema = () => {
    //validando cual de los temas esta seleccionado
    const newTheme = Tema === "dark" ? "light" : "dark";
    setTema(newTheme); // cargando el tema seleccionado
    localStorage.setItem("theme", newTheme); //guardando el tema seleccionado en el local storage por si la pagina se recarga
  };

  // efecto para recordar el tema seleccionado y modificarlo cada que se active el interruptor
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", Tema);
  }, [Tema]);

  return (
    <>
      <div className="navbar bg-primary w-full justify-between rounded-full mb-2">
        <div className="dropdown">
          <label tabIndex={0} className="btn sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-1 shadow bg-base-100 rounded-box w-35 font-bold text-accent"
          >
            <li>
              <a>Sobre mí</a>
            </li>
            <li>
              <a>Habilidades</a>
            </li>
            <li>
              <a>Proyectos</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
            <li>
              <a>Footer</a>
            </li>
          </ul>
        </div>

        <div className="navbar-center sm:flex hidden">
          <ul className="menu menu-horizontal px-1 text-accent font-bold">
            <li>
              <a>Sobre mí</a>
            </li>
            <li>
              <a>Habilidades</a>
            </li>
            <li>
              <a>Proyectos</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
            <li>
              <a>Footer</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <label className="grid cursor-pointer place-items-center">
                <input
                  onChange={CambioTema}
                  type="checkbox"
                  value="Tema"
                  className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                />
                <svg
                  className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                  className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
