import "./ItemListContainer.css"
import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
    console.log("Cargando productos...");
    fetch("/data/products.json")
        .then((res) => {
        console.log("Respuesta del fetch", res);
        if (!res.ok) throw new Error("Hubo un problema al buscar el producto");
        return res.json();
        })
        .then((data) => {
        console.log("Datos recibidos:", data);
        setProducts(data);
        })
        .catch((err) => {
        console.error("Error en fetch:", err);
        });
    }, []);

    return (
        <section>
            <div>
                <h1>Panadería</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit interdum sapien, commodo luctus libero rutrum a. In enim dolor, interdum sed ornare vel, porta a neque.</p>
            </div>
            <ItemList  list={products}/>
        </section>
    )
};