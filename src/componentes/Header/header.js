import React, {Component} from "react"
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

let cookies = new Cookies()

function Header(){
    let existeSession = document.cookie.includes("usuario=");
    return(
        <nav>
        <ul className="main-header">
            <li><Link to="/">Home</Link></li>
            <Link to={`/Todaspopulares`}><button>Populares</button></Link>
            <Link to={`/Toprated`}><button>Mejor valoradas</button></Link>
            {!existeSession ? (
                <>
                <li><Link to="/Loginscreen">Login</Link></li>
                <li><Link to="/registro">Crear Cuenta</Link></li>
                </>
            ) : (
                <li>{}<Link to="/favoritosscreen">Favoritos</Link></li>
            )}
        </ul>

        
    </nav>
    );

}

export default Header;