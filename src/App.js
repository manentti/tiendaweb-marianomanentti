import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Counter from './Counter/Counter';
import ItemListContainer from './Counter/ItemListContainer/ItemListContainer.js';
import { useState } from 'react';
function App() {
  const [show, setShow]= useState(true)
  return (
   
    <div className="App">
      <header className="App-header">
        
        <Navbar/>
        <Counter show={show} stock={10} initial={1}/>
        <ItemListContainer greeting="HOLA CODER"/>
        
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
