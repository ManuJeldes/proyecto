import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { productos } from '../../productos';
const Cart = () => {
  const cartContext =useContext(CartContext)
  console.log(cartContext)
  return <div>
      <h1>Hola Soy El Carrito</h1>

      <td className="row"><img src={`${productos.foto}`} width="100"/></td>
            <td>{productos.titulo}</td>
            <td>{productos.precio}</td>
            <td>
                <a href="#" class="borrar-producto fas fa-times-circle" id="${productos.id}"></a>
            </td>


  </div>;
};

export default Cart;