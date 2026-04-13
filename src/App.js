import Footer from "./componentes/Footer/Footer";
import Header from "./componentes/Header/Header";
import Home from "./screens/Home/Home";
import Pelicula from "./screens/Pelicula/Pelicula";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import Register from "./screens/Registro/Registro";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/" exact={true} component ={Home}/>
        <Route path="/pelicula/:id" component ={Pelicula}/>
        <Route path="/Registro" component ={Register}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
