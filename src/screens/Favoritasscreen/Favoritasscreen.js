import React, {Component} from "react";
import Cookies from "universal-cookie";
import Formregister from "../../componentes/Formregister/Formregister";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import favorita from "../../componentes/Favoritos/Favoritos";
class Favoritasscreen extends Component{
    constructor(props){
        super(props)
        this.state = ""
    }
    render(){
        return(
            <div>
            <Header/>
            <favorita/>
            <Footer/>
            </div>
        )
    }
    }


export default Favoritasscreen