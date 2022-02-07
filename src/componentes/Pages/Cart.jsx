import React, {useContext, Fragment} from 'react';
import { CartContext } from '../../context/CartContext';
// import { productos } from '../../productos';
import { useForm } from 'react-hook-form';
import { createOrder } from '../../firebase';
import { TextField } from '../TextField';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
// import Button from "react"
// import { clear } from '@testing-library/user-event/dist/clear';

const Cart = () => {

  const MySwal = withReactContent(Swal)
  const form=useForm()  
  const {cart, removeItem, clear, subTotal} =useContext(CartContext)
  console.log(cart)

  async function onSubmit(formValues) {
      console.log(cart)
      try {
          const newOrderData = {
              buyer: formValues,
              items: cart,
              total: subTotal,
          }

          const newOrderId = await createOrder(newOrderData)

          await MySwal.fire({
            title: <strong>Compra realizada!</strong>,
            html: <i>{`Gracias por realizar tu compra. Tu número de orden de compra es: ${newOrderId}, con el podras hacer el seguimiento a tu pedido`}</i>,
            icon: 'success'
          })

    

          form.reset()

          clear()

      }
      catch (error) {
          alert(`Ocurrio un error, vuelve a intentar.`)

          console.error(error)
      }
  }
      
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
    
      return (
      <Fragment>      
          <h1>Carrito De Compras</h1>
            <div className="d-flex">
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

            </div>

            <section>
                <h2 className="mb-4 text-3xl font-semibold">Valor de la compra</h2>
                <div className="flex text-2xl">
                <span className="flex-1 font-semibold">Total $</span>
                <span>{subTotal}</span>
                </div>
            </section>

            <h2>Ingresa tus datos</h2>

            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col"
                >
                    <TextField
                        title="Nombre"
                        inputProps={{
                            placeholder: 'Mayerling Tapia',
                            required: true,
                            ...form.register('name')
                        }}
                    />
                    <TextField
                        title="Direccion"
                        inputProps={{
                            placeholder: 'Pasaje Colliguay 1476',
                            required: true,
                            ...form.register('adress')
                        }}
                    />
                    <TextField
                        title="Correo"
                        inputProps={{
                            placeholder: 'Mayerlingcupcakes@gmail.com',
                            required: true,
                            ...form.register('email')
                        }}
                    />
                    <TextField
                        title="Telefono"
                        inputProps={{
                            placeholder: '+56 9 99999999',
                            required: true,
                            ...form.register('phone')
                        }}
                    />
                    <button className="btn btn-danger"
                        disable={cart.length === 0}
                    >
                        Finalizar Compra
                    </button>

            </form>

        </Fragment>);

                                                


};

export default Cart;