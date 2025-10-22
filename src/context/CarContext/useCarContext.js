import { useContext } from "react";
import { CarContext } from "./CarContext"

export const useCarContext = () => {
    return  useContext(CarContext);
}