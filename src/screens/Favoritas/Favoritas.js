import React, { Component } from "react";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import Peliculapopular from "../../componentes/Peliculapopular/Peliculapopular";

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
    <div className="Peliculaspopulares">
      <Header />

      <h3>Mis favoritas</h3>

      {
        this.state.favoritas.length === 0 ? (
          <h1>No tenés películas favoritas guardadas</h1>
        ) : (
          this.state.favoritas.map((elemento, idx) => (
      <Peliculapopular
        key={elemento.id}
        title={elemento.title}
        img={elemento.img}
        id={elemento.id}
        descripcion={elemento.overview}
        language={elemento.original_language}
        />
          ))
        )
      }

      <Footer />
    </div>
  );
}
}

export default Favoritas;