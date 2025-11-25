import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { getProductById } from "../../services/products";

export const ItemDetailContainer = () => {
    const[detail, setDetail] = useState(null)
    const {id} = useParams();

    useEffect(()=>{
        getProductById(id) 
            .then((data) => {
                setDetail(data);
            })
            .catch((error) => {
                console.error("Error al buscar detalle del producto:", error);
                setDetail(null);
            });
    }, [id]);

    {/*useEffect(()=>{
        O remplazo esto con la nueva funciín en products o remplazo la url por https://6922214a09df4a492321cb0e.mockapi.io/id
        fetch("/data/products.json")
        .then((res) => {
            if(!res.ok) {
                throw new Error("Hubo un problema al buscar el producto")
            }
            return res.json()
        })
        .then((data) => {
            const found = data.find(prod => prod.id === id) //Si uso la función de prod esto no lo necesito porque lo hace la api
            if(found){
                setDetail(found);
            }else{
                throw new Error("Prodcuto no encontrado");
            }
        })
        .catch(() => {});
    }, [id]);

    return (
        <main>
           {Object.keys(detail).length ? (
           <ItemDetail detail={detail} />
           ) : (
            <p>Cargando...</p>
           )}
        </main>
    )*/}

    return (
        <main className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                   {detail ? ( 
                        <ItemDetail detail={detail} />
                   ) : (
                        <div className="d-flex justify-content-center py-5">
                            <div className="spinner-border text-primary-pink" role="status">
                                <span className="visually-hidden">Cargando...</span>
                            </div>
                        </div>
                   )}
                </div>
            </div>
        </main>
    )
};