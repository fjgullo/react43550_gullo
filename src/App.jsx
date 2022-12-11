import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import Footer from './components/Footer';
import { NavBar } from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Clicker from './components/Clicker';
import ProductsList from './components/ProductsList';
import CharList from './components/rickandmorty/CharList';
import AppleList from './components/Apple/AppleList';
import AppleDetail from './components/Apple/AppleDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


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
      <AppleList/>
      <ProductsList/>
      <AppleDetail/>
      {/* <CharList/> */}
      <ItemListContainer greeting='Hola Profe'/>
      <h1>Hola Mundo {nombre}</h1>

      <Clicker/>

      {/* <strong style={ estilos }>Hello World</strong>
      { boton } */}

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
