import { Link } from "react-router"

const NotFound = () => {
    return (
        <div>
            <h2>404 - Página no encontrada</h2>
            <Link to={`/`}>Volver al inicio</Link>
        </div>
    );
};

export default NotFound;