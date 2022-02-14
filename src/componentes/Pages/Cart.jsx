import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { createOrder } from '../../firebase';
import { TextField } from '../TextField';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'


const Cart = () => {

  const MySwal = withReactContent(Swal)
  const form=useForm()  
  const {cart, removeItem, clear, subTotal} =useContext(CartContext)

  async function onSubmit(formValues) {
    
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
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Ocurrio un error, vuelve a intentar',
            showConfirmButton: false,
            timer: 2000
          })

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
      <div>      
          <h1>Carrito De Compras</h1>
          <div className='d-flex'>
            <div className="col-sm-6">
                <div class="">
                  
                    <div class="">
                        <div className="five columns">
                            <ul>
                                <div className="submenu">
                                      <div id="carrito">
                                        <a href="#" id="vaciar-carrito" className="btn btn-danger" onClick={()=>clear()}>Vaciar Carrito</a>
                                        <table id="lista-carrito" class="table table-hover">
                                            <div className='d-flex m-3'>
                                            <thead>
                                                <tr>
                                                    <th scope="col">Imagen</th>
                                                    <th scope="col">Producto</th>
                                                    <th scope="col">Cantidad</th>
                                                    <th scope="col">Valor</th>
                                                    <th scope="col">Eliminar</th>
                                                </tr>
                                            </thead>
                                            </div>
                                            <tbody>
                                              {cart.map((item)=>(
                                              <div className='d-flex'>
                                                  <img src={item.foto} style={{width: '70px'}}/>
                                              
                                              <td>{item.nombre}</td>
                                              <td className="text-center">{item.cantidad}</td>
                                              <td>{item.precio}</td>
                                              <td>
                                                  <a href="#" className="borrar-producto fas fa-times-circle" data-id={item.id} onClick={()=>removeItem(item.id, item.cantidad, item.precio)}></a>
                                              </td>
                                              </div>
                                              ))}
                                                
                                            </tbody>
                                        </table>
                                        <p>Total : $ {subTotal}</p>
                                        
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col flex-1 ml-8"
                >
                    <h2>Ingresa tus datos</h2>
                    <TextField className="ms-5 mb-3"
                        title="Nombre"
                        inputProps={{
                            placeholder: 'Mayerling Tapia',
                            required: true,
                            ...form.register('name')
                        }}
                    />
                    <TextField className="ms-5 mb-3"
                        title="Direccion"
                        inputProps={{
                            placeholder: 'Pasaje Colliguay 1476',
                            required: true,
                            ...form.register('adress')
                        }}
                    />
                    <TextField className="ms-5 mb-3"
                        title="Correo"
                        inputProps={{
                            placeholder: 'Mayerlingcupcakes@gmail.com',
                            required: true,
                            ...form.register('email')
                        }}
                    />
                    <TextField className="ms-5 mb-3"
                        title="Telefono"
                        inputProps={{
                            placeholder: '+56 9 99999999',
                            required: true,
                            ...form.register('phone')
                        }}
                    />
                    <button className="btn btn-danger m-5"
                        disable={cart.length === 0}
                    >
                        Finalizar Compra
                    </button>

            </form>
            </div>

        </div>);

                                                


};

export default Cart;