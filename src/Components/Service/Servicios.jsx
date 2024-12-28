import { Data_Servicios } from "./Data_Servicios";

export default function Servicios() {
  return (
    <>
      <div className="bg-primary mx-auto min-h-svh flex flex-col">
        <h2 className="divider divider-success text-center py-10 text-4xl uppercase font-bold ml-10 mr-10 ">
          Servicios
        </h2>

        <div className="flex flex-wrap justify-center gap-4 lg:justify-evenly">
          {Data_Servicios.map((servicio, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center w-60 h-60 p-4 text-center rounded-lg shadow-md backdrop-filter backdrop-blur-sm bg-opacity-30 border border-secondary"
              >
                <div className="text-4xl mb-2">{servicio.logo}</div>
                <h3 className="text-lg font-bold">{servicio.titulo}</h3>
                <p className="text-sm">{servicio.descripcion}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
