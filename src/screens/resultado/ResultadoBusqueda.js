import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class BuscadorPeliculas extends Component {
  constructor(props){
    super(props);
    this.state = {
      buscador: ''
    }
  }

  evitarEnvio(event){
    event.preventDefault();

    this.props.history.push('/resultados/' + encodeURIComponent(this.state.buscador));
  }

  actualizarTermino(event){
    this.setState({ buscador: event.target.value });
  }

  render(){
    return (
      <>
         <form className="form" onSubmit={(event) => this.evitarEnvio(event)}>
                    <input type="text" onChange={(event) => this.actualizarTermino(event)} value={this.state.buscador} placeholder="Buscar película o serie..."/>
                </form>
      </>
    )
  }
}

export default withRouter(BuscadorPeliculas);
