import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { AlertModal } from '../../components/AlertModal/AlertModal'; 

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        const saved = sessionStorage.getItem("session")
        if(saved){
            return JSON.parse(saved);
        }
        return null;
    });

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

    const login = (name, password) => {
        if(name === "admin" && password === "1234"){
            const session = { name };
            setUser(session)
            sessionStorage.setItem("session", JSON.stringify(session));
            return true;
        }
        return false;
    };

    const logout = () => {
        sessionStorage.removeItem("session"); 
        setUser(null)
        displayAlert("Sesión Cerrada", "Has cerrado sesión correctamente.", "Ok");
    };

    const values = { 
        user, 
        login, 
        logout
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
            <AlertModal
                show={showAlert}
                onClose={closeAlert}
                title={alertTitle}
                message={alertMessage}
                confirmText={alertConfirmText}
            />
        </AuthContext.Provider>
    );
}