const URLReceta = import.meta.env.VITE_API_RECETA;
//GET
//PUT O PATH
//DELETE

//POST
export const crearRecetaAPI = async(recetaNueva)=>{
    try {
        const respuesta = await fetch(URLReceta,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(recetaNueva)
        })
        console.log(respuesta)
        return respuesta;
    } catch (error) {
        console.error(error)
        return false;
    }
    
}