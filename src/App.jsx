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
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <main className="sectionMain">
          <Routes>
            <Route exact path="/" element={<Inicio></Inicio>}></Route>
            <Route
              exact
              path="/administrador"
              element={<Administrador></Administrador>}
            ></Route>
            <Route
              exact
              path="/administrador/crear"
              element={<FormularioReceta></FormularioReceta>}
            ></Route>
            <Route
              exact
              path="/administrador/editar"
              element={<FormularioReceta></FormularioReceta>}
            ></Route>
            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
          {/* <Row> */}
          {/* <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta> */}
          {/* <DetalleReceta></DetalleReceta> */}
          {/* </Row>  */}
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
