import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { buscarRecetaAPI } from "../../helpers/queries.js";

const DetalleReceta = () => {

const {id} = useParams();
const [receta, setReceta] = useState({})

useEffect(()=>{
  const mostrarReceta = async ()=>{
    const respuesta = await buscarRecetaAPI(id);
    const recetaObtenida = await respuesta.json();
    setReceta(recetaObtenida)
  };
  mostrarReceta();
},[]);

  return (
    <Row className="container m-auto my-5">
      <Col md={6} lg={6} className="mb-3">
        <img
          src={receta.imagen}
          alt={receta.nombreReceta}
          className="card-img-top-nueva h-100"
        />
      </Col>

      <Col md={6} lg={6} className="mb-3">
        <Card className="h-100 text-center">
          <Card.Body>
            <Card.Title className="primary-font">{receta.nombreReceta}</Card.Title>
            <p className="text-secondary-emphasis">{receta.categoria}</p>
            <h5>Ingredientes</h5>
            <Card.Text className="text-warning-emphasis">
              {receta.ingredientes}
               </Card.Text>
              <h5>Preparación</h5>
              <Card.Text className="text-info-emphasis">
              {receta.preparacion}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default DetalleReceta;

