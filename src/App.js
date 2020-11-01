import './App.css';
import {BrowserRouter as Router , Route, Link} from 'react-router-dom';
import Navegacion from './../src/components/layout/Navegacion';
import Footer from './../src/components/layout/Footer';
import Home from './../src/components/pages/Home';
import Personajes from './../src/components/pages/Personajes';
import Personaje from './../src/components/pages/Personaje';

function App() {
  return (
    <>
    <Router>
      <Navegacion />
      <Route path="/" exact component={Home} />
      <Route path="/personajes" exact component={Personajes} />
      <Route path="/personajes/:id" exact component={Personaje} />
      <Footer />
    </Router>
    </>
  );
}

export default App;


    //<Route path="/alumnos/:id"  component={Alumno}/>