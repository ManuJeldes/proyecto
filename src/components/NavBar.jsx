import React from 'react'
import logo from '../img/logo.png'
import { CartWidget } from './CartWidget'

const NavBar = () => {
    return (
        <div>
           <nav className="logoNavConteiner">
	
                <div className="container">
                    <a href="index.html" className="logo">
                        <img src={logo} alt="Logo de cupcakes" width="80px" height="80px"/>
                    </a>
                </div>


                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li>
                        <a href="conocenos.html">Conócenos</a>
                    </li>
                    <li>
                        <a href="productos.html">Productos</a>
                    </li>
                    <li>
                        <a href="galeria.html">Galería </a>
                    </li>
                    <li>
                        <a href="contactanos.html">Contáctanos</a>
                    </li>
                    
                </ul>

                <CartWidget numOfItems={4}/>

            </nav>

            

        </div>
    )
}


export default NavBar;
