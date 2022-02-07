import React, {useContex} from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { Fragment } from 'react/cjs/react.production.min'
import { CartContext } from '../context/CartContext.js'


export function CartWidget (props) {
    // const{numOfItems}=props
    const numOfItem=useContext(CartContext)

    return <Fragment>
        <div className="mt-3 ms-5">
            
            <img src="../img/carrito.png" alt="cartwidgets" width="40px" height="40px"/>
            <span className="numOfItem">{numOfItem.unidadesSeleccionadas}</span>
            
        </div>
        </Fragment>
}