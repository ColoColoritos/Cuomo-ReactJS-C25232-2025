// src/components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
    // Obtener el año actual dinámicamente
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-pastel mt-5 py-4">
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-3">
                        <h5 className="fs-6 fw-bold text-dark-charcoal mb-3">Pastelery</h5>
                        <p className="small text-muted-pastel mb-0">
                            Tu espacio para la papelería más dulce e inspiradora.
                        </p>
                    </div>
                </div>
                <hr className="my-3 footer-separator" />
                <p className="mb-0 small text-dark-charcoal">
                    &copy; {currentYear} Pastelery. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};