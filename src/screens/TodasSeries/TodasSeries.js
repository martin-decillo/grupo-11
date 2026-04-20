import React, { Component } from "react";
import Serie from "../../componentes/Serie/Serie";
import { withRouter } from "react-router-dom";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";

class TodasSeries extends Component{
    constructor(props){
        super(props);
        this.state = {
            datos: [],
            pag: 1
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=830571fa1c832cffccac2021413e6933&language=es-ES")
        .then(response => response.json())
        .then(data => this.setState(
            {datos: data.results ? data.results : []}))
        .catch(error => console.log(error));
    }

    cargarMas = () => {
        let numPagina = this.state.pag + 1;

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=830571fa1c832cffccac2021413e6933&language=es-ES&page=${numPagina}`)
        .then(response => response.json())
        .then(data => {
            let resultadosNuevos = this.state.datos;

            for(let i = 0; i < data.results.length; i++){
                resultadosNuevos.push(data.results[i]);
            }

            this.setState({
                datos: resultadosNuevos,
                pag: numPagina
            })
        })
        .catch(error => console.log(error));
    }

    render(){
        return(
            <div className="Peliculaspopulares">
                <Header/>

                <h3>Todas las series</h3>

                {
                    this.state.datos.length === 0 ?  <h1>Cargando...</h1> :
                    this.state.datos.map((elemento, idx) => (
                        <Serie
                            key={elemento.name + idx}
                            title={elemento.name}
                            language={elemento.original_language}
                            adult={elemento.adult}
                            img={`https://image.tmdb.org/t/p/w500${elemento.poster_path}`}
                            id={elemento.id}
                            descripcion={elemento.overview}
                        />
                    ))
                }

                <button onClick={this.cargarMas}>Cargar más</button>

                <Footer/>
            </div>
        )
    }
}

export default withRouter(TodasSeries);