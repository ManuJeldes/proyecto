import {useState} from 'react'
import { CartContext } from '../context/CartContext.js'

export function CartProvider ({children}) {
    
    const [cart, setCart] = useState([])
    const [unidadesSeleccionadas, setUnidadesSeleccionadas] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)

    

        function addItem (producto, count)  {
            const itemExiste = cart.find(item => item.id === producto.id)
            // console.log(itemExiste)
            if (!itemExiste) {
                setCart([...cart, {id:producto.id, titulo:producto.nombre, imagen:producto.foto, precio:producto.precio, cantidad:count, subTotal:(producto.precio*count)}])
                setUnidadesSeleccionadas(unidadesSeleccionadas+1)
                setPrecioTotal(precioTotal+(producto.precio*count))
            } else {
                const cartActualizado = cart.map(item => {
                    
                    if (item.id === producto.id) {
                        item.count += count
                        item.subTotal += (producto.precio*count) 
                        
                    }
                    return item
                })
            
                setCart(cartActualizado)
                console.log(cartActualizado)
                setPrecioTotal(precioTotal+(producto.precio*count))
            }
        }

        

        function removeItem (id, count, precio)  {
            const nuevoCart = cart.filter((item) => item.id !== id)
        setCart (nuevoCart)
        setPrecioTotal(precioTotal-(count*precio))
        setUnidadesSeleccionadas(unidadesSeleccionadas - 1)
        }

        function clear () {
            setCart([])
            setUnidadesSeleccionadas(0)
            setPrecioTotal(0)        
        }
        

        // function isInCart () {

        // }

    
    return (<CartContext.Provider value={{cart, unidadesSeleccionadas, precioTotal, addItem, removeItem, clear}} >
            {children}
            </CartContext.Provider>
        )
}