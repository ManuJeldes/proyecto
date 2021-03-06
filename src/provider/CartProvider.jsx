import {useState} from 'react'
import { CartContext } from '../context/CartContext.js'

export function CartProvider ({children}) {
    
    const [cart, setCart] = useState([])
    const [unidadesSeleccionadas, setUnidadesSeleccionadas] = useState(0)
    const [subTotal, setSubTotal] = useState(0)

    

        function addItem (producto, count)  {
            const itemExiste = cart.find(item => item.id === producto.id)
            
            if (!itemExiste) {
                setCart([...cart, {id:producto.id, nombre:producto.nombre, foto:producto.foto, precio:producto.precio, cantidad:count, subTotal:(producto.precio*count)}])
                setUnidadesSeleccionadas(unidadesSeleccionadas+count)
                setSubTotal(subTotal+(producto.precio*count))
            } else {
                const cartActualizado = cart.map(item => {
                    
                    if (item.id === producto.id) {
                        item.cantidad += count
                        item.subTotal += (producto.precio*count) 
                        
                    }
                    return item
                
                })
                setUnidadesSeleccionadas(unidadesSeleccionadas+count)    
                setCart(cartActualizado)
                setSubTotal(subTotal+(producto.precio*count))
            }
        }

        

        function removeItem (id, cantidad, precio)  {
            const nuevoCart = cart.filter((item) => item.id !== id)
        setCart (nuevoCart)
        setSubTotal(subTotal-(cantidad*precio))
        setUnidadesSeleccionadas(unidadesSeleccionadas - cantidad)
        }

        function clear () {
            setCart([])
            setUnidadesSeleccionadas(0)
            setSubTotal(0)        
        }

    
    return (<CartContext.Provider value={{cart, unidadesSeleccionadas, subTotal, addItem, removeItem, clear}} >
            {children}
            </CartContext.Provider>
        )
}