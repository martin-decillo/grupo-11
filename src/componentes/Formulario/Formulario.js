import React, { Component } from 'react'
import Peliculapopular from '../Peliculapopular/Peliculapopular';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Serie from '../Serie/Serie';

class Formulario extends Component{
  constructor(props){
    super(props);
    this.state = {
      datos: []
    }
  }


 componentDidMount(){
    const tipo = this.props.match.params.tipo;
    const buscador = this.props.match.params.busqueda;

    fetch(`https://api.themoviedb.org/3/search/${tipo}?query=${buscador}&api_key=830571fa1c832cffccac2021413e6933`)
      .then(response => response.json())
      .then(data => this.setState({ datos: data.results ? data.results : [] }))
      .catch(error => console.log(error));
  }


  render(){
    const tipo = this.props.match.params.tipo;
    return (

      <div className="ResultadosBusqueda">
        <Header/>
        <h3>Resultados de la búsqueda</h3>
        {this.state.datos.length === 0 ? (
          <h1>Cargando...</h1>
        ) : (
       this.state.datos.map((elemento, idx) => (
  tipo === "movie" ? 
    <Peliculapopular
      key={elemento.id + idx}
      title={elemento.title}
      language={elemento.original_language}
      img={`https://image.tmdb.org/t/p/w500${elemento.poster_path}`}
      id={elemento.id}
      descripcion={elemento.overview}
    />
  :
    <Serie
      key={elemento.id + idx}
      title={elemento.name}
      language={elemento.original_language}
      img={`https://image.tmdb.org/t/p/w500${elemento.poster_path}`}
      id={elemento.id}
      descripcion={elemento.overview}
    />
))
          
        )}
      </div>
    )
  }
}

export default withRouter(Formulario)