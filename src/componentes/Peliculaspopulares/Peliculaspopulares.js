import React, {Component} from "react";
import Peliculapopular from "../Peliculapopular/Peliculapopular";

class Peliculaspopulares extends Component{
    constructor(props){
        super(props);
        this.state = {
            datos: []
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular")
        .then(response => response.json())
        .then(data => this.setState(
            {datos: data.results ? data.results : []}))
        .catch(error => console.log(error));
    }
    render(){
        return(
            <div className = "Peliculaspopulares">
                {
                    this.state.datos.length === 0 ?  <h1> Cargando...</h1>: this.state.datos.map((elemento, idx)=>
                        <Peliculapopular
                        key = {elemento.title + idx}
                        title = {elemento.title}
                        language = {elemento.language}
                        adult = {elemento.adult}
                        img = {elemento.backdrop_path}
                        id = {elemento.id}
                        />
                         )
                }
            </div>
        )

    }
}
export default Peliculaspopulares;
