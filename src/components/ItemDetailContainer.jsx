import { useEffect, useState } from 'react'
import ItemList  from './ItemList'
import React from 'react'
import torta22 from '../img/torta22.jpg'
import torta20 from '../img/torta20.jpg'
import torta25 from '../img/torta25.jpg'


const myPromise = new Promise((resolve, reject) =>{
    let resolucion= true

    if(resolucion) {
        setTimeout(() => {
           const products=[{
                "id": 1,
                "foto": torta20,
                "nombre": "Torta 20 cms",
                "descripcion": "Tres capas de bizcocho <br> Dos capas de relleno a elección <br> Decoración en crema <br> Aproximadamente para 10 a 15 personas",
                "precio": 13000
            // },
            // {
            //     "id": 2,
            //     "foto": torta22,
            //     "nombre": "Torta 22 cms",
            //     "descripcion": "Tres capas de bizcocho <br> Dos capas de relleno a elección <br> Decoración en crema <br> Aproximadamente para 16 a 20 personas",
            //     "precio": 15000
            // },
            // {
            //     "id": 3,
            //     "foto": torta25,
            //     "nombre": "Torta 25 cms",
            //     "descripcion": "Tres capas de bizcocho <br> Dos capas de relleno a elección <br> Decoración en crema <br> Aproximadamente para 21 a 25 personas <br>",
            //     "precio": 17000
            }]

            resolve(products)
        }, 2000)
        
    }
    else {
        reject("ERROR")
    }
})

function ItemDetailContainer () {
    const [products, setProducts] = useState([])

    useEffect(() => {
        myPromise
        .then(res => res.slice(0, 1))
        .catch(err => console.log("err: ", err) )
    }, [])
    return (
        <div>
           <ItemList products={products}/>
        </div>
    )
}

export default ItemDetailContainer;