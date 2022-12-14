import React from "react";
import CartWidget from "../CartWidget";
import './styles.css';

const NavBar = () => {

    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Mi tienda</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        <a class="nav-link" href="#">Productos</a>
                        <a class="nav-link" href="#">Sobre Nosotros</a>
                        
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;