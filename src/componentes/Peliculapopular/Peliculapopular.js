import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

class Peliculapopular extends Component {
    constructor(props){
        super(props);
        this.state = {
            verdescripcion : false
        }
    }

    //cambio de estado
    cambiarEstado = () => {
        this.setState({
             verdescripcion: !this.state.verdescripcion
        });
    }


    render(){
        return(
            <div className="Pelicula">
                <article className="Peliculas-card">
                    <img src = {this.props.img}/>
                    <h2>{this.props.title}</h2>
                    <p>Idioma: {this.props.language}</p>
                    <button>Ver descripcion</button>




                </article>
            </div>
        )
    }


}


export default Peliculapopular;