import Footer from "./componentes/Footer/Footer";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import Home from "./screens/Home/Home";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter> 
    <div>
      <Header/>
      <switch>
        <Route path="/" exact={true} component ={Home}/>
      </switch>
      <Footer/>
    </div>
    </BrowserRouter>
    

  );
}

export default App;
