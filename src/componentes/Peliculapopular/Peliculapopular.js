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
                    <div>
                        {this.state.verdescripcion && <p>{this.props.descripcion} 
                            Idioma: {this.props.language}</p>}
                     </div>
                      <button onClick={() => this.cambiarEstado()}> 
                        {this.state.verdescripcion ? "- info" : "+ info"}
                      </button>
                      <Link to={`/pelicula/${this.props.id}`}>
                        <button>Ir a detalle</button>
                    </Link>
                </article>
            </div>
        )
    }


}


export default Peliculapopular;