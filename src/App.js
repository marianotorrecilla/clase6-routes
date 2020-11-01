
import './App.css';
import {BrowserRouter as Router , Route, Link} from 'react-router-dom';
import NavBar from './../src/components/layout/NavBar';
import Home from './../src/components/pages/Home';
import Personajes from './../src/components/pages/Personajes';
//import Personaje from './../src/components/pages/Personaje';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/personajes" exact component={Personajes} />
    
    </Router>
    </>
  );
}

export default App;


    //<Route path="/alumnos/:id"  component={Alumno}/>