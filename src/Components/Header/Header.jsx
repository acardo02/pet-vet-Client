import React from "react";
import { useNavigate } from "react-router";
import petVetLogo from '../../assets/PetVet.svg'
import "./Header.css"

const Header = () => {

    const navigate = useNavigate()
    return (
        <header> 
            <div id="logo">
                <figure>
                    <img src={petVetLogo} alt="LOGO"/>
                </figure>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
       
            <div id="header-options">
                <a > Inicio </a>
                <a > Acerca de </a>
                <a > Servicios</a>
                <a > Contáctanos </a>
            </div>
            <div id="header-buttons">
                <button id="register-button" onClick={() => navigate("/register")}> Registrate </button>
                <button id="login-button" onClick={() => navigate("/login")}> Login </button>
            </div>
        </header>
        
    );
}

export default Header;

