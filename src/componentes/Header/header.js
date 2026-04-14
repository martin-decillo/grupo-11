import React from "react"
import { Link } from "react-router-dom";

function Header(){
    let existeSession = document.cookie.includes("session=");
    return(
        <nav>
        <ul className="main-header">
            <li><Link to="/">Home</Link></li>
            {!existeSession ? (
                <>
                <li><Link to="/Loginscreen">Login</Link></li>
                <li><Link to="/registro">Crear Cuenta</Link></li>
                </>
            ) : (
                <li><Link to="/favoritos">Favoritos</Link></li>
            )}
        </ul>

        <ul className="user">
            <li>poner el nombre del usuario<img src="./img/imagenes/7.jpeg" alt=""/></li>
        </ul>
    </nav>
    );

}

export default Header;