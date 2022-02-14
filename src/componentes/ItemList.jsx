import React from "react"
import { Link } from "react-router-dom";


function ItemList({product}) {
    
    return (
            <div className="col col-sm-12 col-md-6 col-lg-3">
                <div className="card" style={{width: '18rem'}}>
                    <img src={product.foto} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{product.nombre}</h5>
                        <p className="card-text">$<span className="">{product.precio}</span></p>
                        <Link to={`/item-detail/${product.id}`}>
                            <a className="d-flex btn btn-warning" >Ver detalles</a>
                        </Link>
                    </div>
                </div>
            </div>   
    )}

export default ItemList;