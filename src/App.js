import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCount from './components/ItemCount';
import { Fragment } from 'react/cjs/react.production.min';




function App() {
    return ( 
    <Fragment>
        
            <NavBar/>
            <ItemListContainer/>
            <ItemDetailContainer/>
            <ItemCount/>    
        
    </Fragment>
    );
}

export default App;