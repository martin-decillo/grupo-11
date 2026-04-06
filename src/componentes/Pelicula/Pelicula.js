import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

class Pelicula extends Component {
    constructor(props){
        super(props);
        this.state = {
            verdescripcion : false
        }
    }
    render(){
        return(
            <div className="Pelicula">
                <article className="Peliculas-card">
                    <img src = {this.props.img}/>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.descripcion}</p>
                    <button>Ver descripcion</button>




                </article>
            </div>
        )
    }


}