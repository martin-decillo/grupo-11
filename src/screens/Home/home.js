import Formulario from "../../componentes/Formulario/Formulario";
import Peliculaspopulares from "../../componentes/Peliculaspopulares/Peliculaspopulares";
import React from "react";

function Home() {
  return (
   <div clasName = "Home">
   <Formulario/>
   <Peliculaspopulares/>
   </div>
     
  );
}

export default Home;