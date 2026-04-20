import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Formulario extends Component {
    constructor(props){
        super(props);
        this.state = {
            buscador: "",
            tipo: "movie"
        }
    }

    evitarEnvio(event){
        event.preventDefault();
        this.props.history.push(
            "/ResultadoBusqueda/" + this.state.tipo + "/" + this.state.buscador
        );
    }

    actualizarTermino(event){
        this.setState({
            buscador: event.target.value
        });
    }

    controlarTipo(event){
        this.setState({
            tipo: event.target.value
        });
    }

    render(){
        return(
            <>
                <form className="form" onSubmit={(event) => this.evitarEnvio(event)}>
                    <select onChange={(event) => this.controlarTipo(event)} value={this.state.tipo}>
                        <option value="movie">Peliculas</option>
                        <option value="tv">Series</option>
                    </select>

                    <input
                        type="text"
                        onChange={(event) => this.actualizarTermino(event)}
                        value={this.state.buscador}
                        placeholder="Buscar película o serie..."
                    />
                </form>
            </>
        )
    }
}

export default withRouter(Formulario);