
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navBar";

import ItemListContainer from './components/itemListContainer';
import ItemCount from './components/itemCount';

function App() {
  const onAdd = (cant) => {
    console.log(cant)
}

  return (
    <>
    <NavBar />
    <ItemCount  initial={1} stock={10} onAdd={onAdd} />
    <ItemListContainer saludo={'hola bienvenidos'} />
    </>
  );
}

export default App;
