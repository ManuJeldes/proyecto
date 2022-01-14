import React from "react"

function ItemDetail({product}) {
    return (
    <div>
        
    <div className="card mb-3" style={{width: '540px'}}>
        <div className="row no-gutters">
            <div className="col-md-4">
            <img src={product.foto} className="card-img-top" alt="Torta de 20 cms de diametro"/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text">{product.descripcion}</p>
                <a className="d-flex btn btn-warning" >Agregar Al Carrito</a>
                </div>
            </div>
        </div>
        </div>    
    </div>
    )}

export default ItemDetail;

