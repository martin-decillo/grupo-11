import React, {Component} from "react";
import { Link } from "react-router-dom";

class Serie extends Component {
    constructor(props){
        super(props);
        this.state = {
            verdescripcion: false,
            esFavorita: false
        }
    }

    componentDidMount(){
        let favoritasGuardadas = localStorage.getItem("favoritas");
        let favoritasParseadas = favoritasGuardadas
            ? JSON.parse(favoritasGuardadas)
            : [];

        let existe = false;

        for(let i = 0; i < favoritasParseadas.length; i++){
            if(favoritasParseadas[i].id === this.props.id){
                existe = true;
            }
        }

        this.setState({
            esFavorita: existe
        });
    }

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

        let serie = {
            id: this.props.id,
            title: this.props.title,
            img: this.props.img,
            overview: this.props.descripcion
        };

        let existe = false;

        for(let i = 0; i < favoritasParseadas.length; i++){
            if(favoritasParseadas[i].id === serie.id){
                existe = true;
            }
        }

        if(!existe){
            favoritasParseadas.push(serie);
            localStorage.setItem("favoritas", JSON.stringify(favoritasParseadas));
            this.setState({
                esFavorita: true
            });
        }
    };

    sacarFavorita = () => {
        let favoritasGuardadas = localStorage.getItem("favoritas");
        let favoritasParseadas = favoritasGuardadas
            ? JSON.parse(favoritasGuardadas)
            : [];

        let nuevoArray = [];

        for(let i = 0; i < favoritasParseadas.length; i++){
            if(favoritasParseadas[i].id !== this.props.id){
                nuevoArray.push(favoritasParseadas[i]);
            }
        }

        localStorage.setItem("favoritas", JSON.stringify(nuevoArray));

        this.setState({
            esFavorita: false
        });
    }

    mostrarFavoritos = () => {
        let existeSession = document.cookie.includes("usuario=");
        return existeSession;
    }

    render(){
        return(
            <div className="Pelicula">
                <article className="Peliculas-card">
                    <img src={this.props.img} alt={this.props.title}/>
                    <h2>{this.props.title}</h2>

                    <div>
                        {
                            this.state.verdescripcion ?
                            <p>{this.props.descripcion} Idioma: {this.props.language}</p>
                            :
                            null
                        }
                    </div>

                    <button onClick={this.cambiarEstado}>
                        {this.state.verdescripcion ? "- info" : "+ info"}
                    </button>

                    <Link to={`/SerieP/${this.props.id}`}>
                        <button>Ir a detalle</button>
                    </Link>

                    {
                        this.mostrarFavoritos() ?
                            (
                                this.state.esFavorita ?
                                <button onClick={this.sacarFavorita}>
                                    Sacar de favoritos 💔
                                </button>
                                :
                                <button onClick={this.guardarFavorita}>
                                    Agregar a favoritos ❤️
                                </button>
                            )
                        :
                        null
                    }
                </article>
            </div>
        )
    }
}

export default Serie;