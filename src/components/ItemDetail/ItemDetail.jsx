import "./ItemDetail.css";
import { useCarContext } from "../../context/CarContext/useCarContext";
import { Count } from "../Count/Count";

    {/*return (
        <article className="item-detail">
            <Item {...detail}>
                <Count btnText={"Agregar al carrito"} onConfirm={handleAdd}/>
                <button onClick={() => addItem(detail)}>Enviar al carrito</button>*
            </Item>
        </article>
    );*/}

export const ItemDetail = ({detail}) => {
    const { addItem } = useCarContext();
    
    const handleAdd = (quantity) => {
        addItem({...detail, quantity})
    };
    
    return (
        <article className="card item-detail-pastel-card p-4">
            <div className="row g-4"> 
                <div className="col-md-6">
                    <img 
                        src={detail.imageUrl} 
                        alt={detail.name} 
                        className="img-fluid rounded-3 item-detail-image shadow-sm"
                    />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold text-dark-charcoal mb-3">{detail.name}</h1>
                    <p className="fs-5 text-muted-pastel mb-3">{detail.description}</p>
                    <p className="fs-3 fw-bold text-primary-pink-darker mb-4">Precio: ${detail.price}</p>
                    
                    <div className="mt-auto"> 
                        <Count btnText={"Agregar al carrito"} onConfirm={handleAdd}/>
                    </div>
                </div>
            </div>
        </article>
    );
};