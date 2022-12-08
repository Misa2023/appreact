import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './navBar/NavBar';
import ItemList from './components/ItemList/ItemList';


 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route  path='/' element={ItemList} />
          <Route  path='/categoria/:categoriaId' element={ItemListContainer} />
          <Route  path='/detalles/:productosID' element={ItemDetailContainer} />
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer /> } />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer /> } />
          <Route path='/detalles/:productosID' element={<ItemDetailContainer /> }/>
        </Routes>  
      </BrowserRouter>    
   </div>
  );
}

export default App;
