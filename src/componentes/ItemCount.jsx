import React, {useContext} from 'react'
import { useState, Fragment} from 'react'
import { CartContext } from '../context/CartContext.js'
import Swal from 'sweetalert2';

function ItemCount ({stock,producto}){
    
    const carroContext = useContext(CartContext)
    const [count,setCount]=useState(1)
        
        const inicio=1

    function sumar (event){
        if(count<stock){
            setCount(count+1)
        }else{
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Producto sin stock suficiente',
                showConfirmButton: false,
                timer: 2000
              })
        
        }
    }

    function restar(event){
        if(count>inicio){
            setCount(count-1)
        }
    }

    function agregarCarrito (event){

        carroContext.addItem(producto, count)

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 2000
          })

    }

    return(
        <Fragment>
        <tr>
            <div className='d-flex justify-content-center mb-3'>
            <td><button className='btn btn-danger' onClick={restar}>-</button></td>
              <td className='px-2'>{count}</td>
            <td><button className='btn btn-danger' onClick={sumar}>+</button></td>
            </div>
            <div class="d-grid gap-2"><button className='btn btn-warning' type="button" onClick={agregarCarrito}>Agregar al carrito</button></div>
        </tr>
        </Fragment>
       
    )
}

export default ItemCount;