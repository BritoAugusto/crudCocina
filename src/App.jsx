import "./App.css";
import Footer from "./components/commons/Footer.jsx";
import Inicio from "./components/pages/Inicio.jsx";
import Menu from "./components/commons/Menu.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Error404 from "./components/pages/Error404.jsx";
import DetalleReceta from "./components/pages/DetalleReceta.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login.jsx";
import { useState } from "react";
import RutaProtegida from "./components/routes/RutaProtegida.jsx";
import RutasAdmin from "./components/routes/RutasAdmin.jsx";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("userKey")) || "";
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <>
      <BrowserRouter>
        <Menu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></Menu>
        <main className="sectionMain">
          <Routes>
            <Route exact path="/" element={<Inicio></Inicio>}></Route>
            <Route
              exact
              path="/detalleReceta/:id"
              element={<DetalleReceta></DetalleReceta>}
            ></Route>

            <Route
              exact
              path="/login"
              element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
            ></Route>
            <Route
              exact
              path="/administrador/*"
              element={
                <RutaProtegida>
                  <RutasAdmin></RutasAdmin>
                </RutaProtegida>
              }
            ></Route>
            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
