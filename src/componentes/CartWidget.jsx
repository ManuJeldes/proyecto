import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'


export function CartWidget (props) {
    const{numOfItems}=props

    return <Fragment>
        <div className="mt-3 ms-5">
            <img src="../img/carrito.png" alt="cartwidgets" width="40px" height="40px"/>
            <span className=''>{numOfItems}</span>
        </div>
        </Fragment>
}