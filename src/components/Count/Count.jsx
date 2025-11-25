import "./Count.css";
import { useState } from "react";
import { AlertModal } from '../AlertModal/AlertModal';

export const Count = ({btnText, onConfirm}) => {
    const [count, setCount] = useState(0);
    const [showErrorModal, setShowErrorModal] = useState(false);

    const increase = () => {
        setCount((prev) => prev + 1);
    };

    const decrease = () => {
        setCount((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const confirm = () => {
        if (count > 0){
            onConfirm(count);
        } else { 
            setShowModal(true);
        }
    };

    return (
        <div className="count-container d-flex flex-column align-items-stretch">
            <div className="count-buttons d-flex justify-content-center align-items-center mb-3">
                <button 
                    className="btn btn-outline-secondary-pastel rounded-circle p-2" 
                    onClick={decrease} 
                    disabled={count === 0}
                >
                    <i className="bi bi-dash fs-5"></i>
                </button>
                <span className="mx-3 fs-4 fw-bold text-dark-charcoal">{count}</span>
                <button 
                    className="btn btn-outline-secondary-pastel rounded-circle p-2" 
                    onClick={increase}
                >
                    <i className="bi bi-plus fs-5"></i>
                </button>
            </div>
            
            <button 
                className="btn btn-pastel-primary btn-lg" 
                onClick={confirm} 
                disabled={count === 0}
            >
                {btnText}
            </button>

            <AlertModal
                show={showErrorModal}
                onClose={() => setShowErrorModal(false)}
                title="Atención"
                message="Por favor, selecciona una cantidad mayor a 0 para agregar al carrito."
                confirmText="Entendido"
            />
        </div>
    );
};