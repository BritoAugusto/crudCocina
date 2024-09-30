import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioReceta = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = ()=>{
    console.log('desde onsubmit')
    reset();
  }

  return (
    <section className="container mainSection">
      <h1>Añadir Receta</h1>
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
        <Form.Text>{errors.nombreReceta?.message}</Form.Text>
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
        <Form.Text>{errors.imagen?.message}</Form.Text>
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
        <Form.Text>{errors.categoria?.message}</Form.Text>
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
        <Form.Text>{errors.ingredientes?.message}</Form.Text>
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
              value:500,
              message:
                "Los preparacion deben contener como máximo 500 caracteres",
            },
          })}
        ></Form.Control>
        <Form.Text>{errors.preparacion?.message}</Form.Text>
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
