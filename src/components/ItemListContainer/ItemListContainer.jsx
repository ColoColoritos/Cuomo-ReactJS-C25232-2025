import "./ItemListContainer.css"
import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/products";

export const ItemListContainer = ({ titulo, copy }) => {
    const [products, setProducts] = useState([]);
    const {category} = useParams();
    
    useEffect(() => {
        console.log("Cargando productos...");
        getProduct(category)
            .then((data) => setProducts(data))
            .catch((err) => {
                console.error("Error en fetch:", err);
            });
    }, [category]);

    return (
        <section className="container mt-4 mb-5">
            <div className="p-5 mb-4 rounded-3 text-center bg-secondary-lavender shadow-sm"> 
                <h1 className="display-4 fw-bold text-dark-charcoal">{titulo}</h1>
                <p className="fs-5 text-muted-pastel mt-3">{copy}</p>
            </div>
            
            <ItemList list={products}/>
        </section>
    )
};