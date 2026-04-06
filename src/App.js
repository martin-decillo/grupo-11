import Footer from "./componentes/Footer/Footer";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter> 
    <div>
      <Header/>
      <Formulario/>
      
      


    <Footer/>
    </div>
    </BrowserRouter>
    

  );
}

export default App;
