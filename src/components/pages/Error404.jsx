import { Button } from "react-bootstrap";
import error from "../../assets/error404-cocina.webp"

const Error404 = () => {
    return (
        <section className="mainSection text-center">
            <img src={error} alt="foto de error 404" />
            <div>
                <Button variant="primary my-3">
               Volver al Inicio
                </Button>
            </div>
        </section>
    );
};

export default Error404;