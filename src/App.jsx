import logo from './logo.svg';
import Saludo from './components/Saludo';
import ItemListContainer from './components/ItemListContainer';
import Clicker from './components/Clicker';
import ProductsList from './components/ProductsList';

import AppleCategory from './components/Apple/AppleCategory';
import AppleDetail from './components/Apple/AppleDetail';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CharList from './components/rickandmorty/CharList';
import AppleList from './components/Apple/AppleList';
import Footer from './components/Footer';
import { NavBar } from './components/NavBar';
import CharDetail from './components/rickandmorty/CharDetail';
import ClickEvent from './components/ClickEvent';
import ClickChange from './components/ClickChange';
import React, { useState } from 'react';
import { DarkmodeContext } from './context/darkmodeContext';
import AppleCart from './components/Apple/AppleCart';
import { CartContext } from './context/CartContext1';
import PokeHome from './components/pokemon/PokeHome';
import { PokeContainer } from './components/pokemon/PokeContainer';
import ItemsList from './components/fromfirebase/ItemsList';


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

  //Darkmode

const darkmodeContext = React.createContext(true)

const [darkmode, setDarkmode] = useState(false)

  const darkmodeToggle = () => {
    setDarkmode(!darkmode)
  }

  return (
    <CartContext>
    <DarkmodeContext.Provider value={darkmode}>
     <BrowserRouter>
        <NavBar/>
        <button className='btn' onClick={darkmodeToggle}>Darkmode {darkmode ? 'on' : 'off'}</button>
        <Routes>
          <Route exact path='/' element={<AppleList/>}/>
          <Route path='/items/:id' element={<AppleDetail/>}/>
          <Route path='/items/cart' element={<AppleCart/>}/>
          <Route exact path='/category' element={<AppleList/>}/>
          <Route path='/category/:id' element={<AppleCategory/>}/>
          <Route exact path='/rick' element={<CharList/>}/>
          <Route path='/rick/:charId' element={<CharDetail/>}/>       
          <Route path='/event' element={<ClickEvent/>}/>    
          <Route path='/clickchange' element={<ClickChange/>}/>  
          <Route path='/pokemon' element={<PokeHome/>}/>  
          <Route path='/pokemon/lista' element={<PokeContainer/>}/>  
          <Route path='/fbitems' element={<ItemsList/>}/>  
        </Routes>
        <Footer/>
        {/* <AppleList/>
        <AppleDetail/> */}
      </BrowserRouter>
    </DarkmodeContext.Provider>
    </CartContext>     
  );
}

export default App;

//TRABAJO VIEJO
// return (
//     <div className="App">

//     <NavBar/>
//     <AppleList/>
//     <AppleDetail/>
//     <CharList/>
//     <ProductsList/>
//     <ItemListContainer greeting='Hola Profe'/>
//     <h1>Hola Mundo {nombre}</h1>

//     <Clicker/>

//     <strong style={ estilos }>Hello World</strong>
//     { boton }

//     <Saludo name='John' lastname='Wayne' age={56} action={mensaje}/>
//     <Saludo name='Lionel' lastname='Messi' age={35}/>

//     <li>Argentina</li>
//     <li>Mexico</li>
//     <li>Canada</li>
//     <Footer>
//       <strong>Enlace 1</strong>
//       <strong>Enlace 2</strong>
//     </Footer>
//     </div>
//  );