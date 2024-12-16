export default function Home() {
  return (
    <>
      <section className=" bg-base container mx-auto rounded-xl flex flex-row-reverse gap-1 items-center justify-center min-h-screen shadow-lg flex-wrap">
        <div className="avatar">
          <div className="w-57 h-48 rounded-full ">
            <img src="/Portafolio/yo.jpeg" />
          </div>
        </div>

        <div className="text-center m-2 ">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hola, soy [Oscar Murillo]
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Desarrollador Web | Diseñador | Creador de soluciones digitales
          </p>
        </div>
      </section>

      <section className=" h-40 bg-primary">
        <div className="">Hola mundo</div>
      </section>
    </>
  );
}
