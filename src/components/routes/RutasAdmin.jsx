import Administrador from "../pages/Administrador";
import FormularioReceta from "../recetas/FormularioReceta";
import { Route, Routes } from "react-router-dom";

const RutasAdmin = () => {
    return (
      <Routes>
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/crear"
          element={
            <FormularioReceta
              titulo={"Añadir Receta"}
              creandoReceta={true}
            ></FormularioReceta>
          }
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={
            <FormularioReceta
              titulo={"Editar Receta"}
              creandoReceta={false}
            ></FormularioReceta>
          }
        ></Route>
      </Routes>
    );
};

export default RutasAdmin;