import React, { Component } from "react";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";

class Pelicula extends Component {
  constructor(props){
    super(props);
    this.state = {
      pelicula: null,
      esFavorita: false
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=830571fa1c832cffccac2021413e6933&language=es-ES`)
      .then(response => response.json())
      .then(data => {
        this.setState({ pelicula: data }, this.checkIfFavorita);
      })
      .catch(error => console.log(error));
  }

  checkIfFavorita = () => {
    const { pelicula } = this.state;
    if (!pelicula) return;

    const favoritasParseadas = JSON.parse(localStorage.getItem("favoritas") || "[]");
    const existe = favoritasParseadas.some(fav => fav.id === pelicula.id);
    this.setState({ esFavorita: existe });
  }

  guardarFavorita = () => {
    const { pelicula } = this.state;
    if (!pelicula) return;

    const favoritasParseadas = JSON.parse(localStorage.getItem("favoritas") || "[]");
    const existe = favoritasParseadas.some(fav => fav.id === pelicula.id);

    if (!existe) {
      favoritasParseadas.push({
        id: pelicula.id,
        title: pelicula.title || pelicula.original_title,
        img: pelicula.poster_path,
        overview: pelicula.overview
      });
      localStorage.setItem("favoritas", JSON.stringify(favoritasParseadas));
      this.setState({ esFavorita: true });
    }
  };

  sacarFavorita = () => {
    const { pelicula } = this.state;
    if (!pelicula) return;

    const favoritasParseadas = JSON.parse(localStorage.getItem("favoritas") || "[]");
    const nuevas = favoritasParseadas.filter(fav => fav.id !== pelicula.id);
    localStorage.setItem("favoritas", JSON.stringify(nuevas));
    this.setState({ esFavorita: false });
  };

  render(){
    return(
      <section>
        <Header/>
        {this.state.pelicula === null ? (
          <h2>Cargando...</h2>
        ) : (
          <div>
            <img src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}`} alt="poster"/>
            <h1>{this.state.pelicula.original_title}</h1>
            <p>{this.state.pelicula.overview}</p>
            <p>duración: {this.state.pelicula.runtime} minutos</p>
            <p>Fecha de estreno: {this.state.pelicula.release_date}</p>
            <p>Género: {this.state.pelicula.genres.map(genre => genre.name).join(", ")}</p>
            <p>calificacion: {this.state.pelicula.vote_average}</p>

            {this.state.esFavorita ? (
              <button onClick={this.sacarFavorita}>
                Sacar de favoritos 💔
              </button>
            ) : (
              <button onClick={this.guardarFavorita}>
                Agregar a favoritos ❤️
              </button>
            )}

          </div>
        )}
        <Footer/>
      </section>
    );
  }
}

export default Pelicula;