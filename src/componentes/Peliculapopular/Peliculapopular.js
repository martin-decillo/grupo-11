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
    guardarFavorita = () => {
  let favoritasGuardadas = localStorage.getItem("favoritas");
  let favoritasParseadas = favoritasGuardadas
    ? JSON.parse(favoritasGuardadas)
    : [];

  let pelicula = {
    id: this.props.id,
    title: this.props.title,
    poster_path: this.props.poster_path,
    overview: this.props.descripcion
  };

  let existe = favoritasParseadas.some((fav) => fav.id === pelicula.id);

  if (!existe) {
    favoritasParseadas.push(pelicula);
    localStorage.setItem("favoritas", JSON.stringify(favoritasParseadas));
  }
};


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
                    <button onClick={this.guardarFavorita}>Agregar a favoritos ❤️</button>
                </article>
            </div>
        )
    }


}


export default Peliculapopular;