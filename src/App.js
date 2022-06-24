
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navBar";
import CartWidget from './components/cartWidget';
import ItemListContainer from './components/itemListContainer';
import ItemCount from './components/itemCount';
import Hero from './components/hero';
import ItemDetailContainer from './components/itemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import CartContextProvider from "./contexts/cartContext"


function App() {
  const onAdd = (cant) => {
    console.log(cant)
  }

  return (
    <>
     <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        {/* <Hero /> */}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path='*' element={<Navigate to='/' />} />
          {/* <Route path="/error" element={<Error404 />} /> */}
          {/* <ItemCount initial={1} stock={10} onAdd={onAdd} /> */}

          {/* <ItemDetailContainer /> */}
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
