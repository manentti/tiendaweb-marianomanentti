
import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './Counter/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from "./ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  const [show, setShow]= useState(true)
  return (
   
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<ItemListContainer greeting="todos nuestros productos" />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="estamos filtrando"/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        <Route></Route>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
