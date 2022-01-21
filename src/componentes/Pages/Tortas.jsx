import React from 'react'
import ItemListContainer from '../ItemListContainer'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const Tortas = () => {
    const {category} = useParams()
    return (
        <>
        <h1>{category}</h1>
        <div>
            <ItemListContainer value={category}/>
        </div>
        </>
    )
}

export default Tortas;
