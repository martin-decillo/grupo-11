import React, {Component} from "react";
import Cookies from "universal-cookie";
import Formregister from "../../componentes/Formregister/Formregister";
import Login from "../../componentes/Login/Login";


class Loginscreen extends Component{
    constructor(props){
        super(props)
        this.state = ""
    }
    render(){
        return(
            <Login/>
        )
    }
    }


export default Loginscreen