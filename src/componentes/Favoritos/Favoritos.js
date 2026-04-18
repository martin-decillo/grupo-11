import React, { Component } from "react";
import { Link } from "react-router-dom";

class Favoritos extends Component {
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

  borrarFavorita(id) {
    let filtradas = this.state.favoritas.filter(
      (pelicula) => pelicula.id !== id
    );

    localStorage.setItem("favoritas", JSON.stringify(filtradas));

    this.setState({
      favoritas: filtradas
    });
  }

  render() {
    return (
      <section>
        {this.state.favoritas.length === 0 ? (
          <p>No tenés películas favoritas guardadas.</p>
        ) : (
          this.state.favoritas.map((pelicula, idx) => (
            <article key={pelicula.id || idx}>
              {pelicula.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w342${pelicula.poster_path}`}
                  alt={pelicula.title}
                />
              ) : null}

              <h3>{pelicula.title}</h3>
              <p>{pelicula.overview}</p>

              <Link to={`/pelicula/${pelicula.id}`}>Ir al detalle</Link>

              <button onClick={() => this.borrarFavorita(pelicula.id)}>
                Eliminar de favoritos
              </button>
            </article>
          ))
        )}
      </section>
    );
  }
}

export default Favoritos;