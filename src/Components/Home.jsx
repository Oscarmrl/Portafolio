export default function Home() {
  return (
    <>
      <section className="container mx-auto rounded-xl flex flex-row-reverse gap-1 items-center justify-center min-h-screen shadow-lg">
        <div className="avatar">
          <div className="w-57 h-48 rounded-full ">
            <img src="/Portafolio/yo.jpeg" />
          </div>
        </div>

        <div className="text-center m-2 ">
          <h1 className=" text-5xl uppercase font-bold  text-secondary">
            Hola soy programador
          </h1>
        </div>
      </section>
    </>
  );
}
