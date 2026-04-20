import React, { Component } from "react";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";

class SerieP extends Component {
  constructor(props){
    super(props);
    this.state = {
      serie: null,
      esFavorita: false
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;

    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=830571fa1c832cffccac2021413e6933&language=es-ES`)
      .then(response => response.json())
      .then(data => {
        this.setState({ serie: data });
      })
      .catch(error => console.log(error));

    let favoritasGuardadas = localStorage.getItem("favoritas");
    let favoritasParseadas = favoritasGuardadas
      ? JSON.parse(favoritasGuardadas)
      : [];

    let existe = false;

    for(let i = 0; i < favoritasParseadas.length; i++){
      if(favoritasParseadas[i].id === Number(id)){
        existe = true;
      }
    }

    this.setState({
      esFavorita: existe
    });
  }

  guardarFavorita = () => {
    let favoritasGuardadas = localStorage.getItem("favoritas");
    let favoritasParseadas = favoritasGuardadas
      ? JSON.parse(favoritasGuardadas)
      : [];

    let serie = {
      id: this.state.serie.id,
      title: this.state.serie.name,
      img: `https://image.tmdb.org/t/p/w500${this.state.serie.poster_path}`,
      overview: this.state.serie.overview
    };

    let existe = false;

    for(let i = 0; i < favoritasParseadas.length; i++){
      if(favoritasParseadas[i].id === serie.id){
        existe = true;
      }
    }

    if(!existe){
      favoritasParseadas.push(serie);
      localStorage.setItem("favoritas", JSON.stringify(favoritasParseadas));
      this.setState({
        esFavorita: true
      });
    }
  };

  sacarFavorita = () => {
    let favoritasGuardadas = localStorage.getItem("favoritas");
    let favoritasParseadas = favoritasGuardadas
      ? JSON.parse(favoritasGuardadas)
      : [];

    let nuevoArray = [];

    for(let i = 0; i < favoritasParseadas.length; i++){
      if(favoritasParseadas[i].id !== this.state.serie.id){
        nuevoArray.push(favoritasParseadas[i]);
      }
    }

    localStorage.setItem("favoritas", JSON.stringify(nuevoArray));

    this.setState({
      esFavorita: false
    });
  }

  mostrarFavoritos = () => {
    let existeSession = document.cookie.includes("usuario=");
    return existeSession;
  }

  render(){
    return(
      <section>
        <Header/>
        {this.state.serie === null ? (
          <h2>Cargando...</h2>
        ) : (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w342${this.state.serie.poster_path}`}
              alt={this.state.serie.name}
            />
            <h1>{this.state.serie.name}</h1>
            <p>{this.state.serie.overview}</p>
            <p>Fecha de estreno: {this.state.serie.first_air_date}</p>
            <p>
              Género: {
                this.state.serie.genres
                  ? this.state.serie.genres.map(genre => genre.name).join(", ")
                  : "Sin género"
              }
            </p>
            <p>Calificación: {this.state.serie.vote_average}</p>
            <p>Cantidad de temporadas: {this.state.serie.number_of_seasons}</p>

            {
              this.mostrarFavoritos() ?
                (
                  this.state.esFavorita ?
                  <button onClick={this.sacarFavorita}>
                    Sacar de favoritos 💔
                  </button>
                  :
                  <button onClick={this.guardarFavorita}>
                    Agregar a favoritos ❤️
                  </button>
                )
              :
              null
            }
          </div>
        )}
        <Footer/>
      </section>
    );
  }
}

export default SerieP;