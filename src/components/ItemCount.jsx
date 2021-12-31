import React from 'react'
import { useState} from 'react'

function ItemCount (){
    const [count,setCount]=useState(1)
    const stock=6
    const inicio=1

    return(
        <div className="item-count">
            
            <button  className="counter"
            onClick={() => {
                if(count>inicio) {setCount(count-1)}
            }}>
            -
            </button>

            <p>{count}</p>
        
            <button className="counter"
             onClick={() => {
                 if(count<stock) {setCount(count+1)}
                 else{alert("Producto sin stock")}
                
            }}>
            +
            </button>
        </div>
    )
}

export default ItemCount;