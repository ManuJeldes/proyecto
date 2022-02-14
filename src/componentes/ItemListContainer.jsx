import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getAllProductos, getProductsByCategoryId } from '../firebase'

function getProductos(value) {
    const categoryId = value

    if (categoryId) {
        return getProductsByCategoryId (categoryId)
    }else{
        return getAllProductos()
    }
}

function ItemListContainer({value}) {
    const [cargando, setCargando] = useState(true)
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fn() {
          setCargando(true) 
            
            try{
            const products = await getProductos(value)
                setProducts(products)  
            } catch (error) {
                console.error(error)
            } finally {
                setCargando(false)
            }          
            }
            fn()  
        }, [value])
    return (
            <div className='row'>
                 {products.length===0? <p>Loading...</p>:products.map((product) => <ItemList key={product.id } product={product}/>
              )}
            </div>
            )
}

export default ItemListContainer;

