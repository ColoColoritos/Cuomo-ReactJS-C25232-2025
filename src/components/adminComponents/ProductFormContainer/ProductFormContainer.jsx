import "./ProductFormContainer.css";
import { useState } from "react";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { validateProducts } from "../../../utils/validateProducts";
import { uploadToImgbb } from "../../../services/uploadImage";
import { createProduct } from "../../../services/products";
import { AlertModal } from '../../AlertModal/AlertModal';

export const ProductFormContainer = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
        imageUrl: "" 
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

    const handleChange = (e) => {
        const {name, value} = e.target
        setProduct({...product, [name]: value});
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors({});
        setLoading(true);

        const newError = validateProducts({...product, file})
        if (Object.keys(newError).length > 0) {
            setErrors(newError);
            setLoading(false);
            return;
        };

        try{ 
            const imageUrl = await uploadToImgbb(file);
            const productData = {
                ...product, 
                price: Number(product.price), 
                imageUrl
            }

            await createProduct(productData);
            displayAlert("¡Éxito!", "Producto cargado con éxito.", "Genial");


            setProduct({ name: "", price: "", category: "", description: "", imageUrl: "" });
            setFile(null);

        } catch (error) {
            console.error("Error al cargar producto:", error);
            displayAlert("Error", `Hubo un problema al cargar el producto: ${error.message || "Error desconocido"}`, "Ok");
            setErrors({ general: error.message});
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <ProductFormUI 
                product={product} 
                errors={errors} 
                onChange={handleChange} 
                onFileChange={setFile} 
                loading={loading} 
                onSubmit={handleSubmit}
            />
            <AlertModal
                show={showAlert}
                onClose={closeAlert}
                title={alertTitle}
                message={alertMessage}
                confirmText={alertConfirmText}
            />
        </>
    )
}