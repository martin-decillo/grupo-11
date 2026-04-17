import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class FormularioBusqueda extends Component {
    constructor(props){
        super(props);
        this.state = {
            tipo: "movie",
            busqueda: ""
        };
    }

    evitarRecargar(event) {
        event.preventDefault();

    }


    render() {
        return (
            <form>
               
            </form>
        );
    }
}

export default withRouter(FormularioBusqueda);