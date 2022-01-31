import React, {useContext, Fragment} from 'react';
import { CartContext } from '../../context/CartContext';
// import { productos } from '../../productos';
import { Link } from 'react-router-dom'
// import Button from "react"
// import { clear } from '@testing-library/user-event/dist/clear';

const Cart = () => {
  const {cart, removeItem, clear, subTotal} =useContext(CartContext)
  console.log(cart)
      
      if(cart.length===0)
      return ( <div>
      <h1>Carrito De Compras</h1>
        <h2 className="carroVacio text-center">Carrito vacío, agrega un producto</h2>
        <div className="text-center">
        <Link to="/">
        <button className="btn btn-warning ">Volver al inicio</button>
        </Link>
        </div>
        </div>

      )
    
      return (<div>      
          <h1>Carrito De Compras</h1>
            <form className="d-flex">
                <div class="">
                  
                    <div class="">
                        <div className="four columns">
                            <ul>
                                <div className="submenu">
                                      <div id="carrito">
                                        <a href="#" id="vaciar-carrito" className="btn btn-danger" onClick={()=>clear()}>Vaciar Carrito</a>
                                        <table id="lista-carrito" class="table table-hover">

                                            <thead>
                                                <tr>
                                                    <th scope="col">Imagen</th>
                                                    <th scope="col">Producto</th>
                                                    <th scope="col">Cantidad</th>
                                                    <th scope="col">Valor</th>
                                                    <th scope="col">Eliminar</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                              {cart.map((item)=>(
                                              <Fragment>
                                                  <img src={item.foto} style={{width: '70px'}}/>
                                              
                                              <td>{item.nombre}</td>
                                              <td className="text-center">{item.cantidad}</td>
                                              <td>{item.precio}</td>
                                              <td>
                                                  <a href="#" className="borrar-producto fas fa-times-circle" data-id={item.id} onClick={()=>removeItem(item.id, item.cantidad, item.precio)}></a>
                                              </td>
                                              </Fragment>
                                              ))}
                                                
                                            </tbody>
                                        </table>
                                        <p>Total : $ {subTotal}</p>
                                        <a href="#" id="procesar-pedido" class="btn btn-danger">Realizar pedido</a>
                                        
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

            </form>

            </div>);




};

export default Cart;