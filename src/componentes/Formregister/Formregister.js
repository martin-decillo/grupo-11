import React, { Component } from "react";


class Formregister extends Component{
    constructor(props){
        super(props)
        this.state = {
            nombre : "" ,
            gmail : ""
        }
    }
       controlarCambios(event){
        this.setState({
            nombre: event.target.value , 
            gmail: event.target.value
        })
    }


    render(){
        return(
            <form onSubmit = {(event => this.enviarFormulario(event))}>
                <input type="text" onChange={(event) => this.controlarCambios(event)}/>
                <button type = "Submit">Enviar</button>
            </form>

        )
    }


}

export default Formregister