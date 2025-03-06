import React from "react"


export const VistaIndividualPhone = () => {

    return (
        <div className="container vh-100">
            <div className="row col-md-12">

                <div className="row col-md-4 card-individual-image">
                    <img className="" src="https://images.samsung.com/es/smartphones/galaxy-s25-ultra/images/galaxy-s25-ultra-features-ecosystem-galaxy-s25-mo.jpg?imbypass=true"></img>
                </div>
                <div className="col-md-8 text-white">
                    <div className="card-body-individual">
                        <h5 className="card-title sub-titulo mb-3">Samsung Galaxy s25 Ultra</h5>
                        <p className="card-text-score">
                            <div className="score-container">
                                <span className="score-product">4.0</span>
                                <div className="stars">
                                    <i className="fa-solid fa-star ms-1"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                            </div>
                        </p>
                        <p className="card-text-price sub-titulo"><small className="text-white">1.299,00 €</small></p>
                        <p className="card-text"><small className="text-white"><b>Pantalla: </b> Dynamic AMOLED 2X de 6.8 pulgadas, 120 Hz</small></p>
                        <p className="card-text"><small className="text-white"><b>Procesador: </b> Snapdragon 8 Elite</small></p>
                        <p className="card-text"><small className="text-white"><b>Memoria RAM: </b> 12 GB</small></p>
                        <p className="card-text"><button className="btn-add-cart"><i className="fa-solid fa-cart-plus"></i> Añadir al carrito</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}