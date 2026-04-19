import React, { Component } from "react";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import Peliculapopular from "../../componentes/Peliculapopular/Peliculapopular";

class Favoritas extends Component{
    constructor(props){
        super(props)
        this.state={ favoritas: null}
    }
    componentDidMount(){
    const id = this.props.match.params.id;

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=830571fa1c832cffccac2021413e6933&language=es-ES`)
      .then(response => response.json())
      .then(data => {
        this.setState({ Favoritas: data });
        console.log(data)
      })
      .catch(error => console.log(error));
  }
  render(){
    return(
    <section>
        <Header/>
        {this.state.Favoritas === null ? (
          <h2>Cargando...</h2>
        ) : (
          <div>
            <img src={`https://image.tmdb.org/t/p/w342/${this.state.Favoritas.poster_path}`}/>
            <h1>{this.state.Favoritas.original_title}</h1>
            <p>{this.state.Favoritas.overview}</p>
            <p>duración: {this.state.Favoritas.runtime} minutos</p>
            <p>Fecha de estreno: {this.state.Favoritas.release_date}</p>
            <p>Género: {this.state.Favoritas.genres.map(genre => genre.name).join(", ")}</p>
            <p>calificacion: {this.state.Favoritas.vote_average}</p>
          </div>
        )}
        <Footer/>
      </section>
    );
  }
}

export default Favoritas