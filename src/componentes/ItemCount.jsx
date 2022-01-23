// import React from 'react';
// import { Fragment } from 'react/cjs/react.production.min'; 
// import { Link } from 'react-router-dom';

// export function ItemCount ({productos, count, setCount}){

// const inicio=1

//     function contando(event){
//         if(count<productos.stock){
//             setCount(count + 1)
//         }else{
//             alert("producto sin stock")
//         }
//     }

//     function restar(event){
//         if(count>inicio){
//             setCount(count -1)
//         }
//     }
    
//     function agregar(event){
//         {alert(`se ha agregado ${count} helados al carrito`)}
//     }
    
//     return(
//         <Fragment>
//         <tr>
//             <td><button className='btn btn-success' onClick={contando}>+</button></td>
//             <td className='px-2'>{count}</td>
//             <td><button className='btn btn-danger' onClick={restar}>-</button></td>
//             <Link to="/cart">
//             <td><button className='btn btn-primary' onClick={agregar}>Agregar al carrito</button></td>
//             </Link>
//         </tr>
//         </Fragment>
//     )
// };













import React from 'react'
import { useState, Fragment} from 'react'
import {Link} from 'react-router-dom'

function ItemCount ({stock,productos}){
    const [count,setCount]=useState(1)
   
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
        alert(`Producto agregado al carrito`)
    }

    return(
        <Fragment>
        <tr>
            <td><button className='btn btn-danger' onClick={restar}>-</button></td>
              <td className='px-2'>{count}</td>
            <td><button className='btn btn-danger' onClick={sumar}>+</button></td>
            <Link to="/cart">
            <div class="d-grid gap-2"><button className='btn btn-warning' type="button" onClick={agregarCarrito}>Agregar al carrito</button></div>
            </Link>
        </tr>
        </Fragment>
       
    )
}

export default ItemCount;