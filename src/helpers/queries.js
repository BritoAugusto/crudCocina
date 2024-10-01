const URLReceta = import.meta.env.VITE_API_RECETA;
//PUT O PATH
export const editarRecetaAPI = async (recetaEditada, id) => {
  try {
    const respuesta = await fetch(URLReceta + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaEditada),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

//DELETE
export const borrarRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(URLReceta + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

//GET
export const leerRecetas = async () => {
  try {
    const respuesta = await fetch(URLReceta);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

//GET PARA obtener un producto
export const buscarRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(URLReceta + "/" + id);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

//POST
export const crearRecetaAPI = async (recetaNueva) => {
  try {
    const respuesta = await fetch(URLReceta, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaNueva),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const userAdmin = {
  email: "admin@admin.com",
  password: "crudcocina",
};

export const login = (usuario) => {
  if (
    usuario.email === userAdmin.email &&
    usuario.password === userAdmin.password
  ) {
    sessionStorage.setItem("userKey", JSON.stringify(userAdmin.email));
    return true;
  } else {
    return false;
  }
};
