import React, { Component } from "react";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";

class Pelicula extends Component {
  constructor(props){
    super(props);
    this.state = {
      pelicula: null
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=830571fa1c832cffccac2021413e6933&language=es-ES`)
      .then(response => response.json())
      .then(data => {
        this.setState({ pelicula: data });
        console.log(data)
      })
      .catch(error => console.log(error));
  }

  render(){
    return(
    <section>
        <Header/>
        {this.state.pelicula === null ? (
          <h2>Cargando...</h2>
        ) : (
          <div>
            <img src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}`}/>
            <h1>{this.state.pelicula.original_title}</h1>
            <p>{this.state.pelicula.overview}</p>
            <p>Duración: {this.state.pelicula.runtime} minutos</p>
            <p>Calificación: {this.state.pelicula.vote_average}</p>
          </div>
        )}
        <Footer/>
      </section>
    );
  }
}

export default Pelicula;