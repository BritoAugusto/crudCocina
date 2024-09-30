import { Container, Row } from "react-bootstrap";
import CardReceta from "../recetas/CardReceta";

const Inicio = () => {
  return (
    <>
      <img
        className="bannerInicio"
        src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
        alt="imagen de chefs cocinando"
      />
      <h2 className="text-center my-3">
        Recetas Deliciosas
        </h2>
        <Container>
          <Row>
            <CardReceta></CardReceta>
            <CardReceta></CardReceta>
            <CardReceta></CardReceta>
            <CardReceta></CardReceta>
          </Row>
        </Container>
    </>
  );
};

export default Inicio;
