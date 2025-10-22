import { useState } from "react";
import { CarContext } from "./CarContext";

export const CarProvider = ({children}) => {
    const [car, setCar] = useState([]);

    const exists = (id) => {
    const exist = car.some(p => p.id === id);
    return exist;
    };

    const addItem = (item) => {
        if(exists(item.id)){
            alert("El producto ya existe en el carrito");
            return;
        }

        setCar([...car, item]);
        alert(`${item.name} agregado`);
    };

    const clearCar = () => {
        setCar([])
    };

    const getTotalItems = () => {
        if (car.length) {
            return car.length;
        }
    };

    const values = {
        car, addItem, clearCar, getTotalItems,
    };

    return <CarContext.Provider value={values}>
    {children}
    </CarContext.Provider>
}