import './App.css'
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'; 
import NotFound from './components/NotFound/NotFound.jsx';
import {BrowserRouter, Routes, Route} from 'react-router';
import { CartProvider } from './context/CartContext.jsx';
import Cart from './components/Cart/Cart.jsx';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer saludo= {"Bienvenidos al E-commerce"} />} />
          <Route path='/category/:category' element={<ItemListContainer saludo= {"Productos por Categoría"} />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
    )
}

export default App
