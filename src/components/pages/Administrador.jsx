import { Table } from "react-bootstrap";
import ItemReceta from "../recetas/ItemReceta";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { leerRecetas } from "../../helpers/queries";
import Swal from "sweetalert2";
const Administrador = () => {
  const [listaRecetas, setListaRecetas] = useState([]);
  useEffect(() => {
    obtenerRecetas();
  }, []);

  const obtenerRecetas = async () => {
    const respuesta = await leerRecetas();
    console.log(respuesta);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setListaRecetas(datos);
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: `No se pudo mostrar las recetas, intente en unos minutos`,
        icon: "error",
      });
    }
  };

  return (
    <section className="container my-3">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Tabla de Recetas</h1>
        <Link className="btn btn-primary" to={"/administrador/crear"}>
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Receta</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {listaRecetas.map((receta, posicion) => 
            <ItemReceta
              key={receta.id}
              receta={receta}
              setListaRecetas={setListaRecetas}
              fila={posicion + 1}
            ></ItemReceta>
          )}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
