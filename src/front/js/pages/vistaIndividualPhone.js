import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { ProductColors } from "../component/product-colors";
import { RelatedProducts } from "../component/related-products";

export const VistaIndividualPhone = () => {
    const [imageColors, setImageColors] = useState("https://images.samsung.com/es/smartphones/galaxy-s25-ultra/images/galaxy-s25-ultra-features-ecosystem-galaxy-s25-mo.jpg?imbypass=true");

    const handleImageColors = (imageUrl) => {
        setImageColors(imageUrl);
    };

    return (
        <div className="container">
            <div className="row col-md-12">
                <div className="row col-md-4 card-individual-image">
                    <img className="" src={imageColors} alt="Product" />
                </div>
                <div className="col-md-8 text-white">
                    <div className="card-body-individual">
                        <h5 className="card-title sub-titulo mb-3">Samsung Galaxy s25 Ultra</h5>
                        <p className="card-text-score"></p>
                        <p className="card-text-price sub-titulo">
                            <small className="text-white">1.299,00 €</small>
                        </p>
                        <p className="card-text">
                            <button className="btn-add-cart">
                                <i className="fa-solid fa-cart-plus"></i> Añadir al carrito
                            </button>
                        </p>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTop" aria-expanded="false" aria-controls="collapseTop">
                                        <strong>Descripción</strong>
                                    </button>
                                </h2>
                                <div id="collapseTop" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>El buque insignia de Samsung con una cámara de 200 MP y un rendimiento excepcional.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        <strong>Colores</strong>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="row ms-2">
                                            <div className="col-md-4 d-flex flex-column align-items-center">
                                                <h6 className="title-color">Azul</h6>
                                                <ProductColors image="https://images.samsung.com/es/smartphones/galaxy-s25-ultra/images/galaxy-s25-ultra-features-ecosystem-galaxy-s25-mo.jpg?imbypass=true" />
                                            </div>
                                            <div className="col-md-4 d-flex flex-column align-items-center">
                                                <h6 className="title-color">Negro</h6>
                                                <ProductColors image="https://img.pccomponentes.com/articles/1086/10866751/1707-samsung-galaxy-s25-ultra-smartphone-con-ia-almacenamiento-512gb-bateria-5000mah-titanio-negro-comprar.jpg" />
                                            </div>
                                            <div className="col-md-4 d-flex flex-column align-items-center">
                                                <h6 className="title-color">Plata</h6>
                                                <ProductColors image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFaO3kc8c5nLkQ2FitXAbl0nGa4rS_dd8zuw&s" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <strong>Cámara</strong>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>200 MP</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <strong>Almacenamiento</strong>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>512 GB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <strong>Memoria RAM</strong>
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>12 GB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <strong>Pantalla</strong>
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Dynamic AMOLED 2X de 6.8 pulgadas, 120 Hz</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        <strong>Batería</strong>
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>5000 mAh, carga rápida de 65W</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        <strong>Procesador</strong>
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Snapdragon 8 Elite</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProducts />
        </div>
    );
};
