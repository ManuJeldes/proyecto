import { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import React from 'react'
import { productos } from '../productos'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'



const myPromise = new Promise((resolve, reject) =>{
    let resolucion= true

    if(resolucion) {
        setTimeout(() => {
            resolve(productos)
            
        }, 2000)
        
    }
    else {
        reject("ERROR")
    }
})

function ItemDetailContainer () {
    const [products, setProducts] = useState({})
    const {id} = useParams()
    console.log(products)
    useEffect(() => {
        myPromise
        .then(res => {
          console.log(id)
            const filtro=res.find(product => product.id===id)
            console.log(filtro)
            setProducts(filtro)
            })
        .catch(err => console.log("err: ", err) )
        
    }, [])
    
    return (
        <div className='d-flex container mt-5 col-lg-3 col-md-6 mb-3'>
            
            <div className="card mb-3" style={{width: '540px'}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src={`${products.foto}`} className="card-img-top" alt="Torta de 20 cms de diametro"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{products.nombre}</h5>
                        <p className="card-text">{products.descripcion}</p>
                    {/* <Link className="nav-link" to="/cart" exact>
                        <a href="" className="d-flex btn btn-warning" >Agregar Al Carrito</a>
                    </Link> */}
                    </div>
                    <ItemCount onAdd={()=> {} } stock={products.stock} initial={1}/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ItemDetailContainer;