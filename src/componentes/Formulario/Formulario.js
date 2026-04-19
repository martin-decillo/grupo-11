import React, { Component } from 'react'
import Peliculapopular from '../Peliculapopular/Peliculapopular';
import { withRouter } from 'react-router-dom';

class Formulario extends Component{
  constructor(props){
    super(props);
    this.state = {
      datos: []
    }
  }


 componentDidMount(){

    const buscador = this.props.match.params.busqueda;
    fetch(`https://api.themoviedb.org/3/search/movie?query=${buscador}&api_key=0df8d28c1011b391dfb589da529c8b22`)
      .then(response => response.json())
      .then(data => this.setState({ datos: data.results ? data.results : [] }))
      .catch(error => console.log(error));
  }


  render(){
    return (

      <div className="ResultadosBusqueda">
        <h3>Resultados de la búsqueda</h3>
        {this.state.datos.length === 0 ? (
          <h1>Cargando...</h1>
        ) : (
          this.state.datos.map((pelicula, indice) => (
            <Peliculapopular
              key={pelicula.id}
              key={indice}
              id={pelicula.id}
              titulo={pelicula.title} 
              descripcion={pelicula.overview}
            />
          ))
        )}
      </div>
    )
  }
}

export default withRouter(Formulario)