import { Card, Col } from "react-bootstrap";

const DetalleReceta = () => {
  return (
    <>
      <Col md={6} lg={6} className="mb-3">
        <img
          src="https://media.istockphoto.com/id/1446212074/es/foto/pisto-en-capas-en-una-fuente-para-hornear-rodajas-de-calabac%C3%ADn-pimiento-rojo-chile-calabaza.jpg?s=1024x1024&w=is&k=20&c=AWVT9Ct6uJ1PQc5QbelB2cw3rRF7yHLtBQOs6GpsnK4="
          alt="foto receta"
          className="card-img-top-nueva h-100"
        />
      </Col>

      <Col md={6} lg={6} className="mb-3">
        <Card className="h-100 text-center">
          <Card.Body>
            <Card.Title className="primary-font">Ratatoille</Card.Title>
            <Card.Text>
              <p className="fw-bold">Salado</p>
              <p className="fw-bold ">Ingredientes</p>
              <p className="text-danger-emphasis">
                1 berenjena, 1 calabacín, 1 pimiento rojo, 1 pimiento amarillo,
                1 cebolla, 2 dientes de ajo, 4 tomates maduros, aceite de oliva,
                sal y pimienta al gusto, hierbas provenzales (tomillo, romero,
                orégano)
              </p>
              <p className="fw-bold">Preparación</p>
              <p className="text-warning-emphasis">
                Precalienta el horno a 180°C (350°F). Corta la berenjena,
                calabacín, pimientos y tomates en rodajas finas. Pica la cebolla
                y los ajos. Saltea la cebolla y el ajo en una sartén con un poco
                de aceite de oliva hasta que estén dorados. Cubre la base de una
                fuente para horno con la mezcla de cebolla y ajo. Coloca las
                rodajas de verduras (berenjena, calabacín, pimientos, y tomates)
                alternándolas en la fuente, formando un patrón circular o de
                capas. Rocía con aceite de oliva, agrega sal, pimienta y las
                hierbas provenzales. Hornea durante 45-50 minutos, hasta que las
                verduras estén tiernas.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default DetalleReceta;

