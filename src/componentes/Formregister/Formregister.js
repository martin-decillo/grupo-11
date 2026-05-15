import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function Formregister(props) {
    let datosGuardados = localStorage.getItem("usuario");
    let datosParseados = datosGuardados ? JSON.parse(datosGuardados) : null;

    const [nombre, setnombre] = useState(datosParseados ? datosParseados.nombre : "");
    const [gmail, setgmail] = useState(datosParseados ? datosParseados.gmail : "");
    const [contraseña, setcontraseña] = useState(datosParseados ? datosParseados.contraseña : "");

    function enviarFormulario(event) {
        event.preventDefault();

        let datosGuardados = localStorage.getItem("usuario");
        let datosParseados = datosGuardados ? JSON.parse(datosGuardados) : null;

        if (contraseña.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        if (datosParseados && datosParseados.gmail === gmail) {
            alert("Ese mail ya está en uso");
            return;
        }

        let usuario = { nombre, gmail, contraseña };
        localStorage.setItem("usuario", JSON.stringify(usuario));
        props.history.push("/loginscreen");
    }

    function controlarCambiosnombre(event) { setnombre(event.target.value); }
    function controlarCambiosgmail(event) { setgmail(event.target.value); }
    function controlarCambioscontraseña(event) { setcontraseña(event.target.value); }

    return (
        <form onSubmit={enviarFormulario}>
            <input
                type="text"
                name="nombre"
                value={nombre}
                placeholder="Nombre"
                onChange={controlarCambiosnombre}
            />
            <input
                type="email"
                name="gmail"
                value={gmail}
                placeholder="Gmail"
                onChange={controlarCambiosgmail}
            />
            <input
                type="password"
                name="contraseña"
                value={contraseña}
                placeholder="Contraseña"
                onChange={controlarCambioscontraseña}
            />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default withRouter(Formregister);