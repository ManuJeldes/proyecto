import React, {useContext} from 'react'
import { useState, Fragment} from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CartContext.js'

function ItemCount ({stock,producto}){
    const carroContext = useContext(CartContext)
    const [count,setCount]=useState(1)
        console.log(carroContext)
        const inicio=1

    function sumar (event){
        if(count<stock){
            setCount(count+1)
        }else{
            alert("Producto sin stock suficiente")
        }
    }

    function restar(event){
        if(count>inicio){
            setCount(count-1)
        }
    }

    function agregarCarrito (event){

        carroContext.addItem(producto, count)

        alert(`Producto agregado al carrito`)

    }

    return(
        <Fragment>
        <tr>
            <td><button className='btn btn-danger' onClick={restar}>-</button></td>
              <td className='px-2'>{count}</td>
            <td><button className='btn btn-danger' onClick={sumar}>+</button></td>
            {/* <Link to="/cart"> */}
            <div class="d-grid gap-2"><button className='btn btn-warning' type="button" onClick={agregarCarrito}>Agregar al carrito</button></div>
            {/* </Link> */}
        </tr>
        </Fragment>
       
    )
}

export default ItemCount;