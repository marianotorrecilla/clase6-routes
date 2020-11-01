
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Navegacion from './../src/components/layout/Navegacion';
import Footer from './../src/components/layout/Footer';
import Home from './../src/components/pages/Home';
import Personajes from './../src/components/pages/Personajes';
import Personaje from './../src/components/pages/Personaje';

function App() {
  return (
    <>
    <Router>
      <Navegacion/>
      <Route path="/" exact component={Home} />
      <Route path="/personajes" exact component={Personajes} />
      <Route path="/personajes/:id"  component={Personaje} />
      <Footer/>
    </Router>
    </>
  );
}

export default App;


//CORRECCIONES PARA QUE ARRANCARA DOS BOLUDECES

// -----> En useHTTP {url, params = {}, initialState = []}  parametros por defecto

// -----> Aquí path="/personajes/:id"   faltaba una /  en personajes:id

//El add más importante esta en useHTTP, allí se agrego un condicional, dado que si se consulta los personajes
//se obtiene un arreglo con dos propiedades y una de ellas trae los datos "results".-
//Si se consulta un personaje en particular la app devuelve un objeto con los datos, no existe la propiedad results, 
//razón por la cual se decidio preguntar si la propiedad existe con el metodo hasOwnProperty(<nombre_propiedad>).
//La info de como preguntar la obtuve de: https://www.jstips.co/es_es/javascript/check-if-a-property-is-in-a-object/
//primera o segunda página que sale en google de la busqueda "como saber si una propiedad esta presente + javascript" nada muy sofisticado.
//Posiblemente exista una mejor solución. Mientras más hago más me doy cuenta que menos se :)


    //<Route path="/alumnos/:id"  component={Alumno}/>