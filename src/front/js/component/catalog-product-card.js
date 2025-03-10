import React from 'react';

export const CatalogProductCard = ({product, productName}) => {

 let images = "";
 let descripcion = "";

 const validacionLista = (producto) =>{
    if(producto == "laptops" || producto == "phones"){
    const color = (product.colores[0].toLowerCase()).replace(/ /g, "_")
    images = product.imagen[color]
    descripcion = `${product.almacenamiento}, ${product.camara}, ${product.procesador}`
    }
    else{
        images = product.imagen
        descripcion = `${product.marca}, ${product.pantalla}`
    }
 }

 validacionLista(productName)

 




    return (
        <>
            <div className="card border-0 w-100 mb-5 text-white">
                <div className="image-product-card ratio ratio-1x1">
                <img src={images[0]} className="card-img-top object-fit-cover h-100" alt="..."/>
                </div>
                    <div className="text-product-card card-body border-card border-3 product">
                        <h5 className="card-title mb-0" style={{fontSize: "1em"}}><a href="#">{product.modelo}</a></h5>
                        <p className="fs-4 my-0 py-0"><b>{product.precio}</b></p>
                        <p className="card-text" style={{fontSize: "0.6em"}}>{descripcion}</p>
                    </div>
            </div>
        </>
    )
}