import React, {Component} from "react";
import Peliculapopular from "../Peliculapopular/Peliculapopular";

//doy estado al componente
class Cartelera extends Component{
    constructor(props){
        super(props);
        this.state = {
            datos: []
        }
    }


//fetch para traer peliculas en cartelera 
componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=830571fa1c832cffccac2021413e6933")
        .then(response => response.json())
        .then(data => this.setState(
            {datos: data.results ? data.results : []}))
        .catch(error => console.log(error));
}

render(){
    return(
    <div className = "Cartelera">
                {
                    
                    this.state.datos.length === 0 ?  <h1> Cargando...</h1>: this.state.datos.map((elemento, idx)=>
                        <Peliculapopular
                        key = {elemento.title + idx}
                        title = {elemento.title}
                        language = {elemento.original_language}
                        adult = {elemento.adult}
                        img = {`https://image.tmdb.org/t/p/w500${elemento.poster_path}`}
                        id = {elemento.id}
                        descripcion = {elemento.overview}
                        />
                         )
                }
            </div>
    )

}

}
export default Cartelera