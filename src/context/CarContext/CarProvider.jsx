import { useState } from "react";
import { CarContext } from "./CarContext";
import { AlertModal } from '../../components/AlertModal/AlertModal';

export const CarProvider = ({children}) => {
    const [car, setCar] = useState([]);
    
    const [showAlert, setShowAlert] = useState(false);
    const [alertTitle, setAlertTitle] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertConfirmText, setAlertConfirmText] = useState("Entendido");

    const [showConfirmCheckout, setShowConfirmCheckout] = useState(false);
    const [confirmCheckoutMessage, setConfirmCheckoutMessage] = useState("");

    const displayAlert = (title, message, confirmText = "Entendido") => {
        setAlertTitle(title);
        setAlertMessage(message);
        setAlertConfirmText(confirmText);
        setShowAlert(true);
    };

    const closeAlert = () => {
        setShowAlert(false);
    };

    const exists = (id) => {
        const exist = car.some(p => p.id === id);
        return exist;
    };

    const addItem = (item) => {
        if(exists(item.id)){
            const updateCar = car.map((prod) => {
               if (prod.id === item.id){
                 return {...prod, quantity: prod.quantity + item.quantity}
               }else{
                 return prod;
               }
            });
            setCar(updateCar);
            displayAlert("Producto Actualizado", `Se ha agregado ${item.quantity} unidades más de ${item.name} a tu carrito.`);
        }else{
            setCar([...car, item]);
            displayAlert("¡Producto Agregado!", `${item.name} ha sido añadido a tu carrito.`);
        }
    };

    const deleteItem = (id) => {
        const philtre = car.filter((p) => p.id !== id);
        setCar(philtre);
        displayAlert("Producto Eliminado", "El producto ha sido eliminado de tu carrito.");
    };

    const clearCar = () => {
        setCar([])
        displayAlert("Carrito Vaciado", "Todos los productos han sido eliminados del carrito.");
    };

    const getTotalItems = () => {
        const totalItems = car.reduce((acc, p) => acc + p.quantity, 0)
        return totalItems
    };

    const total = () => {
       const total = car.reduce((acc, p) => acc + p.price * p.quantity, 0)
       return Math.round(total * 100) / 100;
    };

    const handleCheckoutConfirm = () => {
        displayAlert("¡Compra Realizada!", "¡Gracias por tu compra! Tu pedido está en camino.", "Aceptar");
        clearCar();
        setShowConfirmCheckout(false);
    };

    const checkout = () => {
        setConfirmCheckoutMessage("¿Estás seguro de que quieres finalizar la compra?");
        setShowConfirmCheckout(true);
    };

    console.log(car);

    const values = {
        car, 
        addItem, 
        deleteItem, 
        clearCar, 
        getTotalItems, 
        total, 
        checkout,
    };

    return (
        <CarContext.Provider value={values}>
            {children}
            <AlertModal
                show={showAlert}
                onClose={closeAlert}
                title={alertTitle}
                message={alertMessage}
                confirmText={alertConfirmText}
            />
            <AlertModal
                show={showConfirmCheckout}
                onClose={() => setShowConfirmCheckout(false)}
                title="Confirmar Compra"
                message={confirmCheckoutMessage}
                confirmText="Sí, Finalizar"
                cancelText="No, Volver"
                onConfirmAction={handleCheckoutConfirm}
            />
        </CarContext.Provider>
    );
};