import "./App.css";
import Footer from "./components/commons/Footer.jsx";
import Inicio from "./components/pages/Inicio.jsx";
import Menu from "./components/commons/Menu.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import CardReceta from "./components/recetas/CardReceta.jsx";
import { Row } from "react-bootstrap";
import Administrador from "./components/pages/Administrador.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import Error404 from "./components/pages/Error404.jsx";
import DetalleReceta from "./components/pages/DetalleReceta.jsx";
import FormularioReceta from "./components/recetas/FormularioReceta.jsx";

function App() {
  return (
    <>
      <Menu></Menu>
      <main className="sectionMain">
        {/* <Inicio></Inicio> */}
         {/* <Row> */}
          {/* <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta> */}
        {/* <DetalleReceta></DetalleReceta> */}
        {/* </Row>  */}
        {/* <Admi<nistrador></Administrador> */}
        <FormularioReceta></FormularioReceta>
        {/* <Error404></Error404> */}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
