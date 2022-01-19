import React from 'react'
import { useState} from 'react'

function ItemCount ({stock}){
    const [count,setCount]=useState(1)
   
    const inicio=1

    return(
        <div className=" d-flex item-count">
            
            <button  className="btn btn-danger"
            onClick={() => {
                if(count>inicio) {setCount(count-1)}
            }}>
            -
            </button>

            <p>{count}</p>
        
            <button className="btn btn-danger "
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