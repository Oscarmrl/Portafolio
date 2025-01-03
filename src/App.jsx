import Sobre_mi from "./Components/About_Me/Sobre_mi";
import Home from "./Components/Home/Home";
import Navegacion from "./Components/Home/Navegacion";
import Servicios from "./Components/Service/Servicios";
import Proyectos from "./Components/Projects/Proyectos";

function App() {
  return (
    <>
      <Navegacion />
      <Home />
      <Sobre_mi />
      <Servicios />
      <Proyectos />
    </>
  );
}

export default App;
