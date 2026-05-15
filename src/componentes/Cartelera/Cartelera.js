import React, { useState, useEffect } from "react";
import Peliculapopular from "../Peliculapopular/Peliculapopular";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function Cartelera(props) {
    const [datos, setdatos] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=830571fa1c832cffccac2021413e6933")
            .then(response => response.json())
            .then(data => setdatos(data.results ? data.results : []))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="Peliculaspopulares">
            <h3>Peliculas mejor valoradas</h3>
            <Link to={`/Toprated`}><button>Ver todas</button></Link>

            {
                datos.length === 0 ? <h1>Cargando...</h1> :
                    datos
                        .filter((elemento, idx) => idx < 4)
                        .map((elemento, idx) => (
                            <Peliculapopular
                                key={elemento.title + idx}
                                title={elemento.title}
                                language={elemento.original_language}
                                adult={elemento.adult}
                                img={`https://image.tmdb.org/t/p/w500${elemento.poster_path}`}
                                id={elemento.id}
                                descripcion={elemento.overview}
                            />
                        ))
            }
        </div>
    );
}

export default withRouter(Cartelera);