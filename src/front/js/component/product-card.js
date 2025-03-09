import React from 'react';


export const ProductCard = ({ product, name }) => {

    let images = "";
    const validacionLista = (producto) => {
        if (producto == "Laptops" || producto == "Moviles") {
            const color = (product.colores[0].toLowerCase()).replace(/ /g, "_")
            images = product.imagen[color]
        }
        else {
            images = product.imagen
        }
    }

    validacionLista(name);

    return (
        <>
            <div className="card border-0 w-100 mb-5 text-white">
                <img src={images[0]} className="card-img-top" alt="..." />
                <div className="card-body border-card border-5 product">
                    <h5 className="card-title mb-0">{product.modelo}</h5>
                    <p className="fs-4 my-0 py-0"><b>{product.precio}</b></p>
                    <p className="card-text" style={{ fontSize: "0.8em" }}>{product.descripcion}</p>
                </div>
            </div>
        </>
    )
}