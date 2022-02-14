import React from 'react';
import { 
  BrowserRouter, 
  Route, 
  Switch 
} from 'react-router-dom';
import './App.css';
import Navbar from './componentes/Navbar';
import Home from './componentes/Pages/Home';
import Tortas from './componentes/Pages/Tortas';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import  Cart  from './componentes/Pages/Cart';
import { CartProvider } from './provider/CartProvider';



function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/category/:category" exact>
            <Tortas/>
          </Route>
          <Route path="/item-detail/:id" exact>
            <ItemDetailContainer/>
          </Route>
          <Route path="/cart" exact>
            <Cart/>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
