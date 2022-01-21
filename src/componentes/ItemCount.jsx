import React from 'react'
import { useState} from 'react'

function ItemCount ({stock}){
    const [count,setCount]=useState(1)
   
    const inicio=1

    return(
        <div className=" d-flex item-count btn btn-outline-danger">
            
            <button  className="btn btn-warning ms-2 me-5"
            onClick={() => {
                if(count>inicio) {setCount(count-1)}
            }}>
            -
            </button>

            <p>{count}</p>
        
            <button className="btn btn-warning ms-5"
             onClick={() => {
                 if(count<stock) {setCount(count+1)}
                 else{alert("Producto sin stock suficiente")}
                
            }}>
            +
            </button>
        </div>
    )
}

export default ItemCount;