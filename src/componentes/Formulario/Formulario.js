import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Resultados from "../../screens/resultado/ResultadoBusqueda";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo: "movie",
      valor: ""
    };
  }

  ActualizarCambios(event) {
    this.setState({ valor: event.target.value });
  };

  controlarOpcion(event) {
    this.setState({ tipo: event.target.value });
  }

  evitarEnviar(event) {
    event.preventDefault();
    this.props.history.push("/ResultadosBusqueda/" + this.state.tipo + "/" + this.state.valor);
  }

  render() {
    return (
      <form onSubmit={this.evitarEnviar}>
        <input
          type="text"
          placeholder="Buscar serie o pelicula..."
          value={this.state.valor}
          onChange={this.ActualizarCambios}
        />

        <select
          value={this.state.tipo}
          onChange={this.controlarOpcion}
        >
          <option value="pelicula">Películas</option>
          <option value="serie">Series</option>
        </select>

        <button type="submit">Buscar</button>
      </form>
    );
  }
}

export default withRouter(Formulario);