import Cartelera from "../../componentes/Cartelera/Cartelera";
import Formulario from "../../componentes/Formulario/Formulario";
import Peliculaspopulares from "../../componentes/Peliculaspopulares/Peliculaspopulares";
import React from "react";
import Pelicula from "../Pelicula/Pelicula";
import {Link} from "react-router-dom";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";

function Home() {
  return (
   <div clasName = "Home">
   <Header/>
   <Formulario/>
   <Cartelera/>
   <Peliculaspopulares/>
   <Footer/>
   </div>
  
  );
}

export default Home;