import { Navigate } from "react-router-dom";


const RutaProtegida = ({children}) => {
    const userAdmin = JSON.parse(sessionStorage.getItem('userKey')) || null;
    if (!userAdmin) {
        return  <Navigate to={'/login'}></Navigate>

    }else{
        return children
    }
    
};

export default RutaProtegida;