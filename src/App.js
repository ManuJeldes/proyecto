import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { Fragment } from 'react/cjs/react.production.min';



function App() {
    return ( 
    <Fragment>
        
            <NavBar/>
            <ItemListContainer/>
        
    </Fragment>
    );
}

export default App;