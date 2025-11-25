import './Login.css';
import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { AlertModal } from '../AlertModal/AlertModal';

export const Login = () => {
    const [userForm, setUseForm] = useState({name: "", password: ""});
    const {user, login} = useAuthContext();
    const navigate = useNavigate();

    const [showAlert, setShowAlert] = useState(false);
    const [alertTitle, setAlertTitle] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertConfirmText, setAlertConfirmText] = useState("Entendido");

    const displayAlert = (title, message, confirmText = "Entendido") => {
        setAlertTitle(title);
        setAlertMessage(message);
        setAlertConfirmText(confirmText);
        setShowAlert(true);
    };

    const closeAlert = () => {
        setShowAlert(false);
    };

    if(user){
        return <Navigate to="/admin/alta-productos"/> 
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setUseForm({...userForm, [name]: value});
    }

    const handleSubmit = async (e) => {  
        e.preventDefault()
        const success = login(userForm.name, userForm.password);

        if(success){
            navigate("/admin/alta-productos"); 
        }else{
            displayAlert("Error de Acceso", "Credenciales incorrectas. Por favor, inténtalo de nuevo.", "Ok");
            setUseForm({ name: "", password: ""});
        }
    }
    
    return (
        <section className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-7">
                    <form className="p-4 p-md-5 rounded-4 shadow-sm pastel-form-card" onSubmit={handleSubmit}>
                        <h2 className="text-center mb-4 fs-3 fw-bold text-dark-charcoal">Iniciar Sesión Admin</h2>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label fw-semibold text-dark-charcoal">Usuario:</label>
                            <input 
                                type="text" 
                                className="form-control pastel-form-control" 
                                id="username" 
                                name="name" 
                                value={userForm.name} 
                                onChange={handleChange} 
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label fw-semibold text-dark-charcoal">Contraseña:</label>
                            <input 
                                type="password" 
                                className="form-control pastel-form-control" 
                                id="password" 
                                name="password" 
                                value={userForm.password} 
                                onChange={handleChange} 
                                required
                            />
                        </div>
                        <div className="d-grid">
                            <button 
                                type="submit" 
                                className="btn btn-pastel-primary btn-lg"
                            >
                                Iniciar Sesión
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <AlertModal
                show={showAlert}
                onClose={closeAlert}
                title={alertTitle}
                message={alertMessage}
                confirmText={alertConfirmText}
            />
        </section>
    );
};