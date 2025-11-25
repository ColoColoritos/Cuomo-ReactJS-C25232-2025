import { Outlet, Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext/useAuthContext";

export const AdminLayout = () => {
    const { user, logout } = useAuthContext(); 
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/admin");
    };

    return (
        <div className="admin-layout-wrapper d-flex flex-column min-vh-100">
            <nav className="navbar navbar-expand-lg navbar-light admin-navbar-pastel p-3 shadow-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-4 fw-bold text-dark-charcoal" to="/admin">
                        Panel de Administración
                    </Link>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAdmin">
                        <ul className="navbar-nav">
                            {user ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link admin-nav-link text-dark-charcoal" to="/admin/alta-productos">
                                            <i className="bi bi-plus-circle me-2"></i>Alta Productos
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-sm btn-pastel-secondary ms-lg-3" onClick={handleLogout}>
                                            <i className="bi bi-box-arrow-right me-2"></i>Cerrar Sesión ({user.name})
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <li className="nav-item">
                                    <Link className="btn btn-sm btn-pastel-primary" to="/admin">
                                        Iniciar Sesión
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            <main className="admin-content flex-grow-1 p-3">
                <Outlet /> 
            </main>
        </div>
    )
}