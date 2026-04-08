import { computeHeadingLevel } from "@testing-library/dom";
import react, {Component} from "react";


class Pelicula extends Component{
    constructor(props){
        super(props);
        this.state ={
            Pelicula:""
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=830571fa1c832cffccac2021413e6933&language=es-ES")
        .then(response => response.json())
        .then(data => {
            this.setState({
                Pelicula: data
            })
        })
        . catch(error => console.log(error))
    }
    render(){
        return(
            <div className="+pelicula">
                {
                    this.state.pelicula === ""
                    ? <img src="https://i.gifter.com/ZZ5H.gif" alt="loader"/>
                    : null
                }
                {
                    this.state.Pelicula !==""
                    ? (
                    





                    )
                }
                }
                }
            </div>
        )
    }