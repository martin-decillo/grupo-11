import React, {Component} from "react";
import Cookies from "universal-cookie";
import Formregister from "../../componentes/Formregister/Formregister";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";

const cookies = new Cookies()
class Register extends Component{
    constructor(props){
        super(props)
        this.state = ""
    }
    render(){
        return(
            <div>
            <Header/>
            <Formregister/>
            <Footer/>
            </div>
        )
    }
    }


export default Register