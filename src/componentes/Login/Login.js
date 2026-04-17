import React, {Component} from "react";
import { withRouter, Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies()

class Login extends Component{
    constructor(props){
        super(props)
        this.state= {
            gmail: "",
            contraseña: "",
            error: false
        };
    }
        controlarCambios(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

enviarFormulario(event) {
    event.preventDefault();

    let traerDatosUsuario = localStorage.getItem("usuario");
    let datosParseados = traerDatosUsuario ? JSON.parse(traerDatosUsuario) : null;

    datosParseados !== null
        ? this.state.gmail === datosParseados.gmail
        ? this.state.contraseña === datosParseados.contraseña
        ? this.props.history.push("/home")
        : this.setState({ error: true })
        : this.setState({ error: true })
        : this.setState({ error: true });

if (!this.state.error){
    cookies.set("usuario", this.state.gmail)
    this.props.history.push("/")
} 

        
}
render() {
        return (
            <form onSubmit={(event) => this.enviarFormulario(event)}>
             <input
                    type="email"
                    name="gmail"
                    value={this.state.gmail}
                    placeholder="Gmail"
                    onChange={(event) => this.controlarCambios(event)}
                />

                <input
                    type="password"
                    name="contraseña"
                    value={this.state.contraseña}
                    placeholder="contraseña"
                    onChange={(event) => this.controlarCambios(event)}
                />

                <button type="submit">Ingresar</button>

                {this.state.error ? (
                    <p>
                        No hay cuenta. <Link to="/register">Crear una</Link>
                    </p>
                ) : null}
            </form>
        );

}
}


export default withRouter(Login)