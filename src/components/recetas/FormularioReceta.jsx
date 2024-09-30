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
  }

  return (
    <section className="container mainSection">
      <h1>Añadir Receta</h1>
      <Form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group
          className="mb-3"
          controlId="formNombreReceta"
        ></Form.Group>
        <Form.Label >Nombre de Receta*</Form.Label>
        <Form.Control
        type="text"
        placeholder="Ej: Guiso de Arroz"
        {...register("nombreReceta",{
            required: 'El nombre de la Receta es un dato obligatorio',
            minLength: {
                value: 4,
                message: "Debe ingresar como mínimo 2 caracteres"
            },
            maxLength: {
                value: 50,
                message: "Debe ingresar como máximo 50 caracteres"
            }
        })}
        ></Form.Control>
        <Form.Text></Form.Text>
        <Form.Group
          className="mb-3"
          controlId="formImagen"
        ></Form.Group>
        <Form.Label>Url Imagen*</Form.Label>
        <Form.Control></Form.Control>
        <Form.Text></Form.Text>
        <Form.Group
          className="mb-3"
          controlId="formCategoria"
        ></Form.Group>
        <Form.Label>Categoría*</Form.Label>
        <Form.Select>
            <option value="">Seleccione una opción</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
            <option value="Agridulce">Agridulce</option>
        </Form.Select>
        <Form.Text></Form.Text>
        <Form.Group
          className="mb-3"
          controlId="formIngredientes"
        ></Form.Group>
        <Form.Label>Ingredientes*</Form.Label>
        <Form.Control></Form.Control>
        <Form.Text></Form.Text>
        <Form.Group
          className="mb-3"
          controlId="formPreparacion"
        ></Form.Group>
        <Form.Label>Preparación*</Form.Label>
        <Form.Control></Form.Control>
        <Form.Text></Form.Text>
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
