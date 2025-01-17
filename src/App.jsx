import Sobre_mi from "./Components/About_Me/Sobre_mi";
import Home from "./Components/Home/Home";
import Navegacion from "./Components/Home/Navegacion";
import Servicios from "./Components/Service/Servicios";
import Proyectos from "./Components/Projects/Proyectos";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navegacion />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <Sobre_mi />
      </div>
      <div id="services">
        <Servicios />
      </div>
      <div id="projects">
        <Proyectos />
      </div>
      <Footer />
    </>
  );
}

export default App;
