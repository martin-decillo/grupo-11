import Cartelera from "../../componentes/Cartelera/Cartelera";
import Peliculaspopulares from "../../componentes/Peliculaspopulares/Peliculaspopulares";
import React from "react";
import Pelicula from "../Pelicula/Pelicula";
import {Link} from "react-router-dom";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import Formulario from "../../componentes/Formulario/Formulario";
import ResultadoBusqueda from "../resultado/ResultadoBusqueda";

function Home() {
  return (
    <div className="Home">
      <Header />
      <div>
        <ResultadoBusqueda />
      </div>
     <Cartelera />
     <Peliculaspopulares />
     <Footer />
   </div>
  );
}

export default Home;