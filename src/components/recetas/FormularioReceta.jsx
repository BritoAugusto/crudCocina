import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  buscarRecetaAPI,
  crearRecetaAPI,
  editarRecetaAPI,
} from "../../helpers/queries";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const FormularioReceta = ({ titulo, creandoReceta }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { id } = useParams();

  const navegacion = useNavigate()
  useEffect(() => {
    if (!creandoReceta) {
      cargarReceta();
    }
  }, []);

  const cargarReceta = async () => {
    const respuesta = await buscarRecetaAPI(id);
    if (respuesta.status === 200) {
      const recetaEncontrada = await respuesta.json();
      console.log(recetaEncontrada);
      setValue("nombreReceta", recetaEncontrada.nombreReceta);
      setValue("imagen", recetaEncontrada.imagen);
      setValue("categoria", recetaEncontrada.categoria);
      setValue("ingredientes", recetaEncontrada.ingredientes);
      setValue("preparacion", recetaEncontrada.preparacion);
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: `No se pudo editar la receta, intente nuevamente en unos minutos.`,
        icon: "error",
      });
    }
  };

  const onSubmit = async (receta) => {
    if (creandoReceta) {
      const respuesta = await crearRecetaAPI(receta);
      if (respuesta.status === 201) {
        reset();
        Swal.fire({
          title: "La receta fue creada correctamente",
          text: `La receta ${receta.nombreReceta} ,fue creada correctamente`,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `No se pudo crear la receta ${receta.nombreReceta}, intente esta operacion en unos minutos`,
          icon: "error",
        });
      }
    } else {
      const respuesta = await editarRecetaAPI(receta, id);
      if (respuesta.status === 200) {

        Swal.fire({
          title: "La receta fue editada correctamente",
          text: `La receta ${receta.nombreReceta} ,fue editada correctamente`,
          icon: "success",
        });
        navegacion("/administrador")
      }else{
        Swal.fire({
          title: "Ocurrio un error",
          text: `No se pudo editar la receta ${receta.nombreReceta}, intente esta operacion en unos minutos`,
          icon: "error",
        });
      }
    }
  };

  return (
    <section className="container mainSection">
      <h1>{titulo}</h1>
      <Form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreReceta"></Form.Group>
        <Form.Label>Nombre de Receta*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Guiso de Arroz"
          {...register("nombreReceta", {
            required: "El nombre de la Receta es un dato obligatorio",
            minLength: {
              value: 4,
              message: "Debe ingresar como mínimo 2 caracteres",
            },
            maxLength: {
              value: 50,
              message: "Debe ingresar como máximo 50 caracteres",
            },
          })}
        ></Form.Control>
        <Form.Text className="text-danger">{errors.nombreReceta?.message}</Form.Text>
        <Form.Group className="mb-3" controlId="formImagen"></Form.Group>
        <Form.Label>Url Imagen*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
          {...register("imagen", {
            required: "La url de la imagen debe ser obligatoria",
            pattern: {
              value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
              message:
                "Debe ingresar una url de la imagen valida, los formatos admitidos son (jpg|jpeg|gif|png)",
            },
          })}
        ></Form.Control>
        <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
        <Form.Group className="mb-3" controlId="formCategoria"></Form.Group>
        <Form.Label>Categoría*</Form.Label>
        <Form.Select
          {...register("categoria", {
            required: "Debe seleccionar una categoria",
          })}
        >
          <option value="">Seleccione una opción</option>
          <option value="Dulce">Dulce</option>
          <option value="Salado">Salado</option>
          <option value="Agridulce">Agridulce</option>
        </Form.Select>
        <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
        <Form.Group className="mb-3" controlId="formIngredientes"></Form.Group>
        <Form.Label>Ingredientes*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: 2 tazas de harina, 1 cucharada de sal"
          as="textarea"
          {...register("ingredientes", {
            required: "Los ingredientes son obligatorios",
            minLength: {
              value: 5,
              message: "Los ingredientes deben contener al menos 5 caracteres",
            },
            maxLength: {
              value: 150,
              message:
                "Los ingredientes deben contener como máximo 150 caracteres",
            },
          })}
        ></Form.Control>
        <Form.Text className="text-danger">{errors.ingredientes?.message}</Form.Text>
        <Form.Group className="mb-3" controlId="formPreparacion"></Form.Group>
        <Form.Label>Preparación*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Cortar en juliana 3 cebollas"
          as="textarea"
          {...register("preparacion", {
            required: "La preparacion es obligatoria",
            minLength: {
              value: 5,
              message: "Los preparacion deben contener al menos 5 caracteres",
            },
            maxLength: {
              value: 500,
              message:
                "Los preparacion deben contener como máximo 500 caracteres",
            },
          })}
        ></Form.Control>
        <Form.Text className="text-danger">{errors.preparacion?.message}</Form.Text>
        <Form.Group>
          <Button type="submit" variant="primary">
            Guardar
          </Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default FormularioReceta;
