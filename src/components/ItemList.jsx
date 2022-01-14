import React from 'react'
import ItemDetail from './ItemDetail'
import Item from './Item'


function ItemList({ products }) {

    

     return (
       <div className='col-lg-3 col-md-6 mb-3'>
       {products.map((product) => <Item key={product.id } product={product}/>
       )}
       {products.map((product) => <ItemDetail key={product.id } product={product}/>
       )}
       </div>
     )
}

export default ItemList;