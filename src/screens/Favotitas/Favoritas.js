import React, { Component } from "react";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";

class Favoritas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritas: []
    };
  }

  componentDidMount() {
    let favoritasGuardadas = localStorage.getItem("favoritas");
    let favoritasParseadas = favoritasGuardadas
      ? JSON.parse(favoritasGuardadas)
      : [];

    this.setState({
      favoritas: favoritasParseadas
    });
  }

  render() {
    return (
      <section>
        <Header />
        <h1>Mis favoritas</h1>

        {this.state.favoritas.length === 0 ? (
          <h2>No tenés películas favoritas guardadas</h2>
        ) : (
          this.state.favoritas.map((pelicula, idx) => (
            <article key={pelicula.id || idx}>
              <img
                src={`https://image.tmdb.org/t/p/w342/${pelicula.poster_path}`}
                alt={pelicula.title}
              />
              <h2>{pelicula.title}</h2>
              <p>{pelicula.overview}</p>
            </article>
          ))
        )}

        <Footer />
      </section>
    );
  }
}

export default Favoritas;