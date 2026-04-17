import reactRouterDom, {component} from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";


class Favoritasscreen extends component(){
    constructor(props){
        super(props)
         this.state = {pelicula: null};
    }
      componentDidMount(){
    const id = this.props.match.params.id;

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=830571fa1c832cffccac2021413e6933&language=es-ES`)
      .then(response => response.json())
      .then(data => {
        this.setState({ pelicula: data });
        console.log(data)
      })
      .catch(error => console.log(error));
  }
    render(){
    return(
    <section>
        <Header/>
        {this.state.pelicula === null ? (
          <h2>Cargando...</h2>
        ) : (
          <div>
            <img src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}`}/>
            <h1>{this.state.pelicula.original_title}</h1>
            <p>{this.state.pelicula.overview}</p>
            <p>duración: {this.state.pelicula.runtime} minutos</p>
            <p>Fecha de estreno: {this.state.pelicula.release_date}</p>
            <p>Género: {this.state.pelicula.genres.map(genre => genre.name).join(", ")}</p>
            <p>calificacion: {this.state.pelicula.vote_average}</p>
          </div>
        )}
        <Footer/>
      </section>
    );
  }
}
export default Favoritasscreen;
