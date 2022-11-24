import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import Footer from './components/Footer';
import { NavBar } from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const boton = <button>Boton</button>
  const nombre = 'Frankie'

  const estilos = {
    color: 'red',
    backgroundColor: 'yellow',
    padding: 20
  }

  //ejemplo componentes
  const mensaje = () => {
    console.log('juambi pt');
  }

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Hola Profe'/>
      <h1>Hola Mundo {nombre}</h1>
      <strong style={ estilos }>Hello World</strong>
      { boton }

      <Saludo name='John' lastname='Wayne' age={56} action={mensaje}/>
      <Saludo name='Lionel' lastname='Messi' age={35}/>

      <li>Argentina</li>
      <li>Mexico</li>
      <li>Canada</li>
      <Footer>
        <strong>Enlace 1</strong>
        <strong>Enlace 2</strong>
      </Footer>
      </div>
  );
}

export default App;
