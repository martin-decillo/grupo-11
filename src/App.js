import Footer from "./componentes/Footer/Footer";
import Home from "./screens/Home/Home";
import Pelicula from "./screens/Pelicula/Pelicula";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import Register from "./screens/Registro/Registro";
import Loginscreen from "./screens/Loginscreen/Loginscreen";
import Toprated from "./screens/Toprated/Toprated";
import Todaspopulareas from "./screens/Todaspopulares/Todaspopulares";
import Todaspopulares from "./screens/Todaspopulares/Todaspopulares";
import Notfound from "./screens/Notfound/Notfound";
import Favoritas from "./screens/Favotitas/Favoritas";


function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true} component ={Home}/>
        <Route path="/pelicula/:id" component ={Pelicula}/>
        <Route path="/Registro" component ={Register}/>
        <Route path="/Loginscreen" component = {Loginscreen}/>
        <Route path="/Toprated" component = {Toprated}/>
        <Route path="/Todaspopulares" component = {Todaspopulares}/>
        <Route path="/Favoritas" component={Favoritas}/>
        <Route path="*" component={Notfound}/>
      </Switch>
    </div>
  );
}

export default App;
