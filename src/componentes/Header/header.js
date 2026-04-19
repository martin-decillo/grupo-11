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
            <li><Link to={`/Todaspopulares`}><button>Populares</button></Link></li>
            <li><Link to={`/Toprated`}><button>Mejor valoradas</button></Link></li>
            {!existeSession ? (
                <li className="auth">
                  <Link to="/Loginscreen">Login</Link>
                  <Link to="/registro">Crear Cuenta</Link>
                </li>
            ) : (
                <li className="auth"><Link to="/Favoritas">Favoritos</Link></li>
            )}
        </ul>

        
    </nav>
    );

}

export default Header;