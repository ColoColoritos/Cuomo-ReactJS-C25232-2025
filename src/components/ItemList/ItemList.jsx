import "./ItemList.css";
import { Link } from "react-router-dom";
import { Item } from "../Item/Item";

export const ItemList = ({list}) => {

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {list.length ? (
                list.map((prod) => (
                    <div className="col" key={prod.id}>
                        <Link to={`/detail/${prod.id}`} className="text-decoration-none">
                            <Item {...prod} />
                        </Link>
                    </div>
                ))
            ) : (
                <div className="col-12 text-center py-5">
                    <div className="spinner-border text-primary-pink" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            )}
        </div>
    )
};