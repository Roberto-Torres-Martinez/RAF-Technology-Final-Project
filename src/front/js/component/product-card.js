import React from 'react';
import { Link } from 'react-router-dom';


export const ProductCard = ({ product, name }) => {

    let images = "";
    const validacionLista = (producto) => {
        if (producto == "Laptops" || producto == "Moviles") {
            const color = (product.colores[0].toLowerCase()).replace(/ /g, "_")
            images = product.imagen[color]
        }
        else {
            images = product.imagen
        };
    };


    let IndividualProduct = "";
    const validacionProduct = (producto) => {
        if (producto == "Laptops") {
            IndividualProduct = "/laptop-info"};
        if (producto == "Moviles") {
            IndividualProduct = "/smartphone-info"};
        if (producto == "TVs") {
            IndividualProduct = "/tv-info"};
    };

    
    
    

    validacionLista(name);
    validacionProduct(name);

    return (
            <div className="container_card_home">
                <div className="card_home">
                    <div className='container_img'>
                        <Link to={IndividualProduct}>
                            <img src={images[0]} />
                        </Link>
                    </div>
                    <span>{product.modelo}</span>
                    <div className='card_description'>
                        <p>{product.descripcion}</p>
                    </div>
                    <h3>{product.precio}</h3>
                </div>
            </div>
    )
}