import { Tema } from "../../hooks/Tema";
import { HashLink as Link } from "react-router-hash-link";

export default function Navegacion() {
  const [tema, CambioTema] = Tema();

  return (
    <nav className="navbar bg-primary w-full justify-between rounded-xl mb-2">
      <details className="dropdown md:hidden block">
        <summary className="btn m-1">
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
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-13 shadow text-accent font-bold">
          <li>
            <Link smooth to="#home" className="a_dorpdown">
              Inicio
            </Link>
          </li>
          <li>
            <Link smooth to="#about" className="a_dorpdown">
              Sobre mí
            </Link>
          </li>
          <li>
            <Link smooth to="#services" className="a_dorpdown">
              Habilidades
            </Link>
          </li>
          <li>
            <Link smooth to="#projects" className="a_dorpdown">
              Proyectos
            </Link>
          </li>
        </ul>
      </details>

      <div className="navbar-center md:flex hidden">
        <ul className="menu menu-horizontal px-1 text-accent font-bold">
          <li>
            <Link smooth to="#about" className="a_nav">
              Sobre mí
            </Link>
          </li>
          <li>
            <Link smooth to="#services" className="a_nav">
              Habilidades
            </Link>
          </li>
          <li>
            <Link smooth to="#projects" className="a_nav">
              Proyectos
            </Link>
          </li>
          <li>
            <Link smooth to="#footer" className="a_nav">
              Contacto
            </Link>
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
    </nav>
  );
}
