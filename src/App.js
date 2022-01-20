import React from 'react';
import { 
  BrowserRouter, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom';
import './App.css';
import Navbar from './componentes/Navbar';
import Cupcakes from './componentes/Pages/Cupcakes';
import Home from './componentes/Pages/Home';
import Popcakes from './componentes/Pages/Popcakes';
import Tortas from './componentes/Pages/Tortas';
import ItemDetailContainer from './componentes/Pages/ItemDetailContainer';
//import logo from './logo.svg';
//import * as bootstrap from 'bootstrap';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/:category" exact>
            <Tortas/>
          </Route>
          <Route path="/item-detail/:id" exact>
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
