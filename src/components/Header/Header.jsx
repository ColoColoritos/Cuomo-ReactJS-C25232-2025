import "./Header.css";
import { useState } from "react";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import logo from '../../../public/images/Pastelery.png'; 

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="navbar navbar-expand-lg sticky-top pastel-navbar shadow-sm">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to={"/"} onClick={closeMenu}>
                    <img src={logo} alt="Logo Pastelery" className="logo-img me-2" />
                </Link>

                <button 
                    className="navbar-toggler border-0" 
                    type="button" 
                    onClick={handleToggle}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`} id="navbarNav">
                    <Nav closeMenu={closeMenu} />
                </div>
            </div>
        </header>
    );
};