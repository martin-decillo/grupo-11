import React, { Component } from "react";
import Favoritos from "../../componentes/Favoritos/Favoritos";

class Favoritasscreen extends Component {
  render() {
    return (
      <main>
        <h2>Mis favoritas</h2>
        <Favoritos />
      </main>
    );
  }
}

export default Favoritasscreen;