import { Card, Button, Col } from "react-bootstrap";

const CardReceta = () => {
  return (
    <Col lg={3} md={4} className="mb-3">
      <Card className="h-100">
        <div>
        <img
          className="card-img-top-nueva"
          src="https://media.istockphoto.com/id/1446212074/es/foto/pisto-en-capas-en-una-fuente-para-hornear-rodajas-de-calabac%C3%ADn-pimiento-rojo-chile-calabaza.jpg?s=1024x1024&w=is&k=20&c=AWVT9Ct6uJ1PQc5QbelB2cw3rRF7yHLtBQOs6GpsnK4="
        />

        </div>
        <Card.Body>
          <Card.Title className="fw-bold">Pollo a la Crema</Card.Title>
          <Card.Text className="text-info-emphasis">
            La mejor receta para hacer el famoso plato de la famosa pelicula
            'Ratatoille'
          </Card.Text>
          <Button variant="primary">Ver más...</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
