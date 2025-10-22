import "./Nav.css";
import { Link } from "react-router-dom";
import { useCarContext } from "../../context/CarContext/useCarContext";

export const Nav = () => {
    const { getTotalItems } = useCarContext();

    return <nav>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/category/dulce"}>Dulce</Link>
            </li>
            <li>
                <Link to={"/category/salado"}>Salado</Link>
            </li>
            <li>
                <Link>Carrito</Link>
                {getTotalItems() > 0 && (
                    <span className="in-car">{getTotalItems()}</span>
                )}
            </li>
        </ul>
    </nav>
}