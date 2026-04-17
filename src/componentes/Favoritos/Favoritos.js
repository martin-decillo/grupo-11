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
         
        let usuario = {
            nombre: this.state.nombre,
            gmail: this.state.gmail,
            contraseña: this.state.contraseña
        };
        
        localStorage.setItem("favorita", JSON.stringify());
    }
}