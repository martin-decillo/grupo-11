import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Formregister extends Component {
    constructor(props){
        super(props);

        let datosGuardados = localStorage.getItem("usuario");
        let datosParseados = datosGuardados ? JSON.parse(datosGuardados) : null;

        this.state = {
            nombre: datosParseados ? datosParseados.nombre : "",
            gmail: datosParseados ? datosParseados.gmail : "",
            contraseña: datosParseados ? datosParseados.Contraseña : ""
        };
    }

    enviarFormulario(event){
        event.preventDefault();

        let usuario = {
            nombre: this.state.nombre,
            gmail: this.state.gmail,
            contraseña: this.state.contraseña
        };

        localStorage.setItem("usuario", JSON.stringify(usuario));

        this.props.history.push("/Registro");
    }

    controlarCambios(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return(
            <form onSubmit={(event) => this.enviarFormulario(event)}>
                <input
                    type="text"
                    name="nombre"
                    value={this.state.nombre}
                    placeholder="Nombre"
                    onChange={(event) => this.controlarCambios(event)}
                />

                <input
                    type="email"
                    name="gmail"
                    value={this.state.gmail}
                    placeholder="Gmail"
                    onChange={(event) => this.controlarCambios(event)}
                />
                <input
                    type="contraseña"
                    name="contraseña"
                    value={this.state.contraseña}
                    placeholder="contraseña"
                    onChange={(event) => this.controlarCambios(event)}
                />

                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default withRouter(Formregister);
