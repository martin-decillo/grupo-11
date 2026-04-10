import Cartelera from "../../componentes/Cartelera/Cartelera";
import Formulario from "../../componentes/Formulario/Formulario";
import Peliculaspopulares from "../../componentes/Peliculaspopulares/Peliculaspopulares";
import React from "react";
import Pelicula from "../Pelicula/Pelicula";
import {Link} from "react-router-dom";

function Home() {
  return (
   <div clasName = "Home">
   <Formulario/>
   <Cartelera/>
   <Peliculaspopulares/>
   </div>
  
  );
}

export default Home;