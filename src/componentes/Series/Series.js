import React, {Component} from "react";
import Serie from "../Serie/Serie";
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";

class Series extends Component{
    constructor(props){
        super(props);
        this.state = {
            datos: []
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=830571fa1c832cffccac2021413e6933&language=es-ES")
        .then(response => response.json())
        .then(data => this.setState(
            {datos: data.results ? data.results : []}))
        .catch(error => console.log(error));
    }

    render(){
        return(
            <div className="Peliculaspopulares">
                <h3>Series</h3>
                <Link to={`/TodasSeries`}><button>Ver todas</button></Link>
                {
                    this.state.datos.length === 0 ?  <h1>Cargando...</h1> :
                    this.state.datos
                        .filter((elemento, idx) => idx < 4)
                        .map((elemento, idx) => (
                            <Serie
                                key={elemento.name + idx}
                                title={elemento.name}
                                language={elemento.original_language}
                                img={`https://image.tmdb.org/t/p/w500${elemento.poster_path}`}
                                id={elemento.id}
                                descripcion={elemento.overview}
                            />
                        ))
                }
            </div>
        )
    }
}
export default withRouter(Series)
