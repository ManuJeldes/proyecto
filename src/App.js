import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import { Fragment } from 'react/cjs/react.production.min';

function App() {
    return ( 
    <Fragment>
        
            <NavBar/>
            <ItemListContainer/>
            <ItemCount/>    
        
    </Fragment>
    );
}

export default App;