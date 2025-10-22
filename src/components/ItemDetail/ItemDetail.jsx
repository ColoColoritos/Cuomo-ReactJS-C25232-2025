import "./ItemDetail.css";
import { useCarContext } from "../../context/CarContext/useCarContext";
import { Item } from "../Item/Item";

export const ItemDetail  = ({detail}) => {
    const { addItem } = useCarContext();
    return (
        <article className="item-detail">
            <Item {...detail}>
                <button onClick={() => addItem(detail)}>Enviar al carrito</button>
            </Item>
        </article>
    );
};