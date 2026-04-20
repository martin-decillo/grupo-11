import Cartelera from "../../componentes/Cartelera/Cartelera";
import Peliculaspopulares from "../../componentes/Peliculaspopulares/Peliculaspopulares";
import React from "react";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import Formulario from "../../componentes/Formulario/Formulario";
import Series from "../../componentes/Series/Series";

function Home() {
    return (
        <div className="Home">
            <Header />

            <div>
                <Formulario />
            </div>

            <Cartelera />
            <Peliculaspopulares />
            <Series />

            <Footer />
        </div>
    );
}

export default Home;