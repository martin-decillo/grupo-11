import React, {Component} from "react"
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

let cookies = new Cookies()

function Header(){
    let existeSession = document.cookie.includes("usuario=");
    return(
    <nav>
         <h1>UDESA Movies</h1>
        <ul>
            <li><Link to="/"><button>Home</button></Link></li>
            <Link to={`/Todaspopulares`}><button>Populares</button></Link>
            <Link to={`/Toprated`}><button>Mejor valoradas</button></Link>
            <Link to={`/TodasSeries`}><button>Series</button></Link>
            {!existeSession ? (
                <li className="auth">
                  <Link to="/Loginscreen"><button>Login</button></Link>
                  <Link to="/Registro"><button>Crear cuenta</button></Link>
                </li>
            ) : (
                <li>{}<Link to="/Favoritas"><button>Favoritas</button></Link></li>
            )}
        </ul>

        
    </nav>
    );

}

export default Header;