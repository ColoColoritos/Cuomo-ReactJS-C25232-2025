import "./Item.css";
export const Item = ({name, price, description, imageUrl, children}) => {

    return (
        <article className="card h-100 item-pastel-card">
            <img 
                src={imageUrl} 
                className="card-img-top item-image"
                alt={name}
            />
            <div className="card-body d-flex flex-column">
                <h2 className="card-title product-title fs-5 fw-bold mb-2">{name}</h2>
                <p className="card-text text-muted-pastel product-description mb-3">{description}</p>
                <p className="card-text product-price fs-4 fw-bold mt-auto text-primary-pink-darker">Precio: ${price}</p>
                
                {children && <div className="mt-3 d-grid">{children}</div>}
            </div>
        </article>
    );
};