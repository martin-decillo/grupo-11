import React, {Component} from "react";
import { Link } from "react-router-dom";

class Favoritas extends Component(){
    constructor(props){
        super(props)
        let Peliculsfavoritas = localStorage.getItem("Favoritas");
        let PeliculasParseadas = Peliculsfavoritas ? JSON.parse(datosGuardados) : null;
        
        this.state={ "favorita": null}
    }
        enviarFormulario(event){
        event.preventDefault();
         
        let favorita = {
            favorita: this.state.favorita,
        };
        
        localStorage.setItem("favorita", JSON.stringify());
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
        {this.state.favorita === null ? (
          <h2>Cargando...</h2>
        ) : (
          <div>

          </div>
        )}
        <Footer/>
      </section>
    );
  }

}