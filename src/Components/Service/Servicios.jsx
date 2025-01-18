import { Data_Servicios } from "./Data_Servicios";

export default function Servicios() {
  return (
    <>
      <div className="bg-primary mx-auto h-auto w-auto flex flex-col">
        <h2 className="seccion">Habilidades</h2>

        <div className="flex flex-wrap justify-center gap-4 lg:justify-evenly">
          {Data_Servicios.map((servicio, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center bg-secondary last:mb-5 w-60 h-60 p-4 text-center rounded-lg shadow-md backdrop-filter backdrop-blur-sm bg-opacity-30 border border-secondary"
              >
                <div className="text-4xl mb-2">{servicio.logo}</div>
                <h3 className="text-lg font-roboto font-bold">
                  {servicio.titulo}
                </h3>
                <p className="text-1xl font-roboto">{servicio.descripcion}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
