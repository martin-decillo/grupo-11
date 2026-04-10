import Footer from "./componentes/Footer/Footer";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import Home from "./screens/Home/Home";
import Pelicula from "./screens/Pelicula/Pelicula";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/" exact={true} component ={Home}/>
        <Route path="/pelicula/:id" component ={Pelicula}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
