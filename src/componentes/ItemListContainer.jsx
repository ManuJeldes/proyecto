import { useEffect, useState } from 'react'
import ItemList from './ItemList'
// import React from 'react'
// import { productos } from '../productos'
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
            <div className='col-lg-3 col-md-6 mb-3'>
                 {products.length===0? <p>Loading...</p>:products.map((product) => <ItemList key={product.id } product={product}/>
              )}
            </div>
            )
}

export default ItemListContainer;

// const myPromise = new Promise((resolve, reject) =>{
//     let resolucion= true

//     if(resolucion) {
//         setTimeout(() => {
//             resolve(productos)
            
//         }, 2000)
        
//     }
//     else {
//         reject("ERROR")
//     }
// })

// function ItemListContainer ({value}) {
//     const [products, setProducts] = useState([])
//     // console.log(products)
//     useEffect(() => {
//         // myPromise
//         getProductos
//         .then(res => {
//             const filtro=res.filter(product => {
//                 if(value){
//                     return product.category===value
//                 }else{
//                     return true
//                 }
//             })
//             // console.log(filtro)
//             setProducts(filtro)
//             })
//         .catch(err => console.log("err: ", err) )
        
//     }, [value])
//     return (
//         <div className='col-lg-3 col-md-6 mb-3'>
            
//            {products.length===0? <p>Loading...</p>:products.map((product) => <ItemList key={product.id } product={product}/>
//       )}


//         </div>
//     )
// }

// export default ItemListContainer;