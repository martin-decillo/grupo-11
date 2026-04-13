import React, {Component} from "react";
import Cookies from "universal-cookie";
import Formregister from "../../componentes/Formregister/Formregister";

const cookies = new Cookies()
class Register extends Component{
    constructor(props){
        super(props)
        this.state = ""
    }
    render(){
        return(
            <Formregister/>
        )
    }
    }


export default Register