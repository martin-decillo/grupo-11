import Footer from "./componentes/Footer/Footer";
import Home from "./screens/Home/Home";
import Pelicula from "./screens/Pelicula/Pelicula";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import Register from "./screens/Registro/Registro";
import Loginscreen from "./screens/Loginscreen/Loginscreen";
import Toprated from "./screens/Toprated/Toprated";
import Todaspopulares from "./screens/Todaspopulares/Todaspopulares";
import Notfound from "./screens/Notfound/Notfound";
import Favoritas from "./screens/Favoritas/Favoritas";
import Formulario from "./componentes/Formulario/Formulario";
import ResultadoBusqueda from "./screens/Resultado/ResultadoBusqueda";
import SerieP from "./screens/SerieP/SerieP";
import TodasSeries from "./screens/TodasSeries/TodasSeries";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/pelicula/:id" component={Pelicula}/>
        <Route path="/Registro" component={Register}/>
        <Route path="/Loginscreen" component={Loginscreen}/>
        <Route path="/Toprated" component={Toprated}/>
        <Route path="/Todaspopulares" component={Todaspopulares}/>
        <Route path="/Favoritas" component={Favoritas}/>
        <Route path="/ResultadoBusqueda/:tipo/:busqueda" component={ResultadoBusqueda}/>
        <Route path="/TodasSeries" component={TodasSeries}/>
        <Route path="/SerieP/:id" component={SerieP}/>
        <Route path="*" component={Notfound}/>
      </Switch>
    </div>
  );
}

export default App;
