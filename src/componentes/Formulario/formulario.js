import { Component } from "react";
import { withRouter } from "react-router-dom";

class Formulario extends Component{
    constructor(props){
        super(props)
        this.state = {
            value : ""

        }
    }   
    enviarFormulario(event){
        event.preventDefault()
        this.props.history.push("/resultado/"+this.state.value)
    }
    controlarCambios(event){
        this.setState({
            value: event.target.value
        })

    }

    render() {
        return(
            <form onSubmit = {(event => this.enviarFormulario(event))}>
                <input type="text" onChange={(event) => this.controlarCambios(event)}/>
                <button type = "Submit">Enviar</button>
            </form>

            
        )
    }
}

export default withRouter(Formulario);