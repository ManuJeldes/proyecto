import { useEffect, useState } from 'react'
import ItemCount from '../ItemCount'
//Simport ItemDetail from './ItemDetail'
import React from 'react'
import { productos } from '../../productos'
import { useParams } from 'react-router-dom'
// import torta22 from '../img/torta22.jpg'
// import torta20 from '../img/torta20.jpg'
// import torta25 from '../img/torta25.jpg'


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
        <div className='col-lg-3 col-md-6 mb-3'>
            
            <div className="card mb-3" style={{width: '540px'}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src={products.foto} className="card-img-top" alt="Torta de 20 cms de diametro"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{products.nombre}</h5>
                        <p className="card-text">{products.descripcion}</p>
                        <a href="" className="d-flex btn btn-warning" >Agregar Al Carrito</a>
                    </div>
                    <ItemCount stock={products.stock} initial={1}/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ItemDetailContainer;