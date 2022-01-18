import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Fragment } from 'react/cjs/react.production.min';
import "bootstrap/dist/css/bootstrap.min.css";




function App() {
    return ( 
    <Fragment>
        
            <NavBar/>
            <ItemListContainer/>
            <ItemDetailContainer/>
                
        
    </Fragment>
    );
}

export default App;