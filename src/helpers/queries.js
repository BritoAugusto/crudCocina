const URLReceta = import.meta.env.VITE_API_RECETA;
//PUT O PATH
//DELETE

//GET
export const leerRecetas = async()=>{
try {
    const respuesta = await fetch(URLReceta)
    return respuesta;
} catch (error) {
    console.error(error)
    return false;
}
}


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