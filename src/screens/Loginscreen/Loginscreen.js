import React, {Component} from "react";
import Cookies from "universal-cookie";
import Formregister from "../../componentes/Formregister/Formregister";
import Login from "../../componentes/Login/Login";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";


class Loginscreen extends Component{
    constructor(props){
        super(props)
        this.state = ""
    }
    render(){
        return(
            <div>
            <Header/>
            <Login/>
            <Footer/>
            </div>
        )
    }
    }


export default Loginscreen