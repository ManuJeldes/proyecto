import { useEffect, useState, useContext } from 'react'
import ItemCount from './ItemCount'
import React from 'react'
// import { productos } from '../productos'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext.js'
import { getProductById } from '../firebase'




function ItemDetailContainer () {
    const carroContext = useContext(CartContext)
    const [products, setProducts] = useState({})
    const {id} = useParams()
    
    async function getProduct(id) {
    const data = await getProductById(id)
    
    setProducts(data)
}
    useEffect(() => {
        getProduct(id)
        
    }, [])
    
    return (
        
        <div className="row">
            <h1 className='m-3'>Detalle del producto</h1>
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className='card' style={{ backgroundImage: `url(${products.background})`, backgroundPosition:'center center', backgroundSize: 'cover' }}>
                    <div className='card-header bg-warning'>
                    {products.nombre}
                    </div>
                    <img src={`${products.foto}`} className="card-img-top" alt="" />
                    <p style={{backgroundColor:'white'}}>{products.descripcion}</p>
                    <ItemCount producto={products} onAdd={()=> {} } stock={products.stock} initial={1}/>

                </div>
            </div>
            <div className="col-md-3"></div>
            
        </div>
       
    )
}

export default ItemDetailContainer;