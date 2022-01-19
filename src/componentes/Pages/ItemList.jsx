import React from "react"
import { Link } from "react-router-dom";

// import ItemCount from "./ItemCount";

function ItemList({product}) {
    
    return (
    <div>
        <div className="container col-lg-3 col-md-6 mb-3">
        <article className="container col-lg-3 col-md-6 mb-3">
                <div className="card" style={{width: '18rem'}}>
                    <img src={product.foto} className="card-img-top" alt="Torta de 20 cms de diametro"/>
                    <div className="card-body">
                        <h5 className="card-title">{product.nombre}</h5>
                        <p className="card-text">
                            <tr>
                                <td>
                                    <h3 className="card-title pricing-card-title precio">$<span className="">{product.precio}</span></h3>
                                </td>
                            </tr>
                        </p>
                        <Link to={`/item-detail/${product.id}`}>
                        <a className="d-flex btn btn-warning" >Ver detalles</a>
                        </Link>
                    </div>
                </div>
            </article>
    </div>    
    </div>
    )}

export default ItemList;