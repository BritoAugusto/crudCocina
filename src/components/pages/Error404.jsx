import { Button } from "react-bootstrap";
import error from "../../assets/error404-cocina.webp"
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <section className="mainSection text-center">
            <img src={error} alt="foto de error 404" />
            <div>
                <Link className="btn btn-primary my-3" to={"/"}>
               Volver al Inicio
                </Link>
            </div>
        </section>
    );
};

export default Error404;