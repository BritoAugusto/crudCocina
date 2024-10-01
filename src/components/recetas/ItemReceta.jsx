import { Button } from "react-bootstrap";

const ItemReceta = ({receta, setListaReceta, fila}) => {
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
        <Button className="me-md-2 me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
