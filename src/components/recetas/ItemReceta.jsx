import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarRecetaAPI, leerRecetas } from "../../helpers/queries.js";
import { Link } from "react-router-dom";
const ItemReceta = ({receta, setListaRecetas, fila}) => {

  const borrarReceta = ()=>{
Swal.fire({
  title: "¿Estás seguro de borrar la receta?",
  text: "No puedes revertir esta operacion!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Borrar!",
  cancelButtonText: "Cancelar"
}).then(async(result) => {
  if (result.isConfirmed) {
    const respuesta = await borrarRecetaAPI(receta.id)
    console.log(respuesta)
    if (respuesta.status === 200) {
      Swal.fire({
        title: "Receta Eliminada!",
        text: `La receta ${receta.nombreReceta}.`,
        icon: "success",
      });
      const recetasAPI = await leerRecetas();
      if (recetasAPI.status === 200) {
        const recetasActualizadas = await recetasAPI.json()
        setListaRecetas(recetasActualizadas)
      }
    }else{
       Swal.fire({
         title: "Ocurrio un error",
         text: `La receta ${receta.nombreReceta}, no pudo ser eliminada, intente de nuevo en unos minutos`,
         icon: "error",
       });
    }
  }
});
}

  return (
    <tr>
      <td className="text-center">{fila}</td>
      <td>{receta.nombreReceta}</td>
      <td className="text-center">
        <img
          src={receta.imagen}
          alt={receta.nombreReceta}
          className="img-item"
        />
      </td>
      <td>{receta.categoria}</td>
      <td className="text-center">
        <Link className="btn btn-warning me-md-2 me-lg-2" to={"/administrador/editar"}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={borrarReceta}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
