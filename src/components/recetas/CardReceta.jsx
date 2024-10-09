import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = ({receta}) => {
  return (
    <Col lg={3} md={4} className="mb-3">
      <Card className="h-100">
        <div>
        <img
          className="card-img-top-nueva"
          src={receta.imagen}
          alt={receta.nombreReceta}
        />

        </div>
        <Card.Body>
          <Card.Title className="fw-bold">{receta.nombreReceta}</Card.Title>
          <Card.Text className="text-info-emphasis">
           {receta.ingredientes}
          </Card.Text>
          <Link className="btn btn-primary" to={`/detalleReceta/${receta._id}`}>Ver más...</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
