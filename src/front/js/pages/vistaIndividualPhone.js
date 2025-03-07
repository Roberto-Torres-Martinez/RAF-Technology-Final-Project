import React from "react"
import { ProductColors } from "../component/product-colors"
import { useState } from "react"
import { ProductSection } from "../component/product-section"
import { ProductCard } from "../component/product-card"
import { RelatedProducts } from "../component/related-products"


export const VistaIndividualPhone = () => {

    const [imageColors, setImageColors] = useState("https://images.samsung.com/es/smartphones/galaxy-s25-ultra/images/galaxy-s25-ultra-features-ecosystem-galaxy-s25-mo.jpg?imbypass=true")

    const handleImageColors = (imageUrl) => {
        setImageColors(imageUrl);
    };

    return (
        <div className="container vh-100">
            <div className="row col-md-12">
                <div className="row col-md-4 card-individual-image">
                    <img className="" src={imageColors}></img>
                </div>
                <div className="col-md-8 text-black">
                    <div className="card-body-individual">
                        <h5 className="card-title sub-titulo mb-3">Samsung Galaxy s25 Ultra</h5>
                        <p className="card-text-score">
                        </p>
                        <p className="card-text-price sub-titulo"><small className="text-black">1.299,00 €</small></p>
                        <p className="card-text"><small className="text-black"><b>Cámara: </b> 200 MP</small></p>
                        <p className="card-text"><small className="text-black"><b>Almacenamiento: </b> 512 GB</small></p>
                        <p className="card-text"><small className="text-black"><b>Memoria RAM: </b> 12 GB</small></p>
                        <p className="card-text"><button className="btn-add-cart"><i className="fa-solid fa-cart-plus"></i> Añadir al carrito</button></p>
                    </div>
                </div>
                <div className="row col-md-4 d-flex justify-content-evenly ms-2">
                    <h5 className="text-black text-colors">Colores Disponibles</h5>
                    <ProductColors image="https://images.samsung.com/es/smartphones/galaxy-s25-ultra/images/galaxy-s25-ultra-features-ecosystem-galaxy-s25-mo.jpg?imbypass=true" />
                    <ProductColors image="https://img.pccomponentes.com/articles/1086/10866751/1707-samsung-galaxy-s25-ultra-smartphone-con-ia-almacenamiento-512gb-bateria-5000mah-titanio-negro-comprar.jpg" />
                    <ProductColors image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFaO3kc8c5nLkQ2FitXAbl0nGa4rS_dd8zuw&s" />
                </div>
            </div>
            <RelatedProducts />
        </div>
    )
}