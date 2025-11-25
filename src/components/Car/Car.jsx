import "./Car.css";
import { useCarContext } from "../../context/CarContext/useCarContext";
import { Link } from "react-router-dom";
import { AlertModal } from '../AlertModal/AlertModal';

export const Car = () => {
    const {car, clearCar, deleteItem, total, checkout, 
           showAlert, alertTitle, alertMessage, alertConfirmText, closeAlert
          } = useCarContext();

    return (
        <section className="container my-5">
            <h2 className="text-center mb-4 fs-1 fw-bold text-dark-charcoal">Tu Carrito</h2>

            {car.length > 0 ? (
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="list-group mb-4 rounded-4 shadow-sm">
                            {car.map((prod) => (
                                <div key={prod.id} className="list-group-item d-flex align-items-center justify-content-between pastel-cart-item">
                                    <div className="d-flex align-items-center">
                                        <img 
                                            src={prod.imageUrl} 
                                            alt={prod.name} 
                                            className="img-thumbnail rounded-3 me-3 cart-item-image"
                                        />
                                        <div>
                                            <h5 className="mb-0 fw-bold text-dark-charcoal">{prod.name}</h5>
                                            <p className="mb-0 text-muted-pastel">Precio: ${prod.price}</p>
                                            <p className="mb-0 text-muted-pastel">Cantidad: {prod.quantity}</p>
                                        </div>
                                    </div>
                                    <button 
                                        className="btn btn-outline-danger btn-sm rounded-circle"
                                        onClick={() => deleteItem(prod.id)}
                                        aria-label={`Eliminar ${prod.name} del carrito`}
                                    >
                                        <i className="bi bi-trash fs-6"></i>
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-4 p-3 rounded-4 shadow-sm bg-secondary-lavender">
                            <p className="mb-0 fs-4 fw-bold text-dark-charcoal">Total a pagar: ${total()}</p>
                            <div className="d-flex gap-2">
                                <button className="btn btn-pastel-secondary" onClick={clearCar}>Vaciar</button>
                                <button className="btn btn-pastel-primary" onClick={checkout}>Finalizar Compra</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-5">
                    <i className="bi bi-cart-x display-1 text-muted-pastel mb-4"></i>
                    <p className="fs-3 text-dark-charcoal mb-4">Tu carrito está vacío</p>
                    <Link className="btn btn-pastel-primary btn-lg" to="/">
                        <i className="bi bi-arrow-left-circle me-2"></i>Seguir comprando
                    </Link>
                </div>
            )}

            <AlertModal
                show={showAlert}
                onClose={closeAlert}
                title={alertTitle}
                message={alertMessage}
                confirmText={alertConfirmText}
            />
        </section>
    );
};