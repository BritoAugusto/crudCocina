import { Container, Row } from "react-bootstrap";
import CardReceta from "../recetas/CardReceta.jsx";
import { useEffect, useState } from "react";
import { leerRecetas } from "../../helpers/queries";

const Inicio = () => {
  const [receta, setReceta] = useState([]);

  useEffect(() => {
    obtenerRecetas();
  }, []);

  const obtenerRecetas = async () => {
    const respuesta = await leerRecetas();
    if (respuesta.status === 200) {
      const recetasObtenidas = await respuesta.json();
      setReceta(recetasObtenidas);
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: `En estos momentos no podemos mostrar la lista de recetas, intentá nuevamente más tarde`,
        icon: "error",
      });
    }
  };

  return (
    <>
      <img
        className="bannerInicio"
        src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
        alt="imagen de chefs cocinando"
      />
      <Container>
        <h2 className="text-center my-3">Recetas Deliciosas</h2>
        <hr />
        <Row>
          {receta.map((receta, index) => (
            <CardReceta key={index} receta={receta}></CardReceta>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Inicio;
