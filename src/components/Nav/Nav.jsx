import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useCarContext } from "../../context/CarContext/useCarContext";

export const Nav = ({ closeMenu }) => {
    const { getTotalItems } = useCarContext();
    const totalItems = getTotalItems();

    const linkClass = ({ isActive }) => isActive ? "nav-link pastel-link active" : "nav-link pastel-link";

    return (
        <ul className="navbar-nav align-items-center">
            <li className="nav-item">
                <NavLink className={linkClass} to={"/"} onClick={closeMenu}>
                    Inicio
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={linkClass} to={"/category/cuadernos"} onClick={closeMenu}>
                    Cuadernos
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={linkClass} to={"/category/escritura"} onClick={closeMenu}>
                    Escritura
                </NavLink>
            </li>
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <NavLink 
                    className="btn btn-pastel-primary position-relative d-flex align-items-center gap-2" 
                    to={"/carrito"} 
                    onClick={closeMenu} // <--- Importante aquí también
                >
                    <i className="bi bi-cart2 fs-5"></i>
                    <span>Carrito</span>
                    {totalItems > 0 && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-light cart-badge">
                            {totalItems}
                            <span className="visually-hidden">items en el carrito</span>
                        </span>
                    )}
                </NavLink>
            </li>
        </ul>
    );
};