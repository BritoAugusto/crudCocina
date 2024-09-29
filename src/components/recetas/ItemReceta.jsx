import { Button } from "react-bootstrap";

const ItemReceta = () => {
  return (
    <tr>
      <td className="text-center">1</td>
      <td>Ratatoille</td>
      <td className="text-center">
        <img
          src="https://media.istockphoto.com/id/1446212074/es/foto/pisto-en-capas-en-una-fuente-para-hornear-rodajas-de-calabac%C3%ADn-pimiento-rojo-chile-calabaza.jpg?s=1024x1024&w=is&k=20&c=AWVT9Ct6uJ1PQc5QbelB2cw3rRF7yHLtBQOs6GpsnK4="
          alt="nombre receta"
          className="img-item"
        />
      </td>
      <td>Salado</td>
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
