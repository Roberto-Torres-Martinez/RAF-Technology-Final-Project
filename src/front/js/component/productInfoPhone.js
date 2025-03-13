import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { ProductColors } from "../component/product-colors";
import { useParams } from "react-router-dom";

export const ProductInfoPhone = ({ }) => {
    const [imageColors, setImageColors] = useState("https://images.samsung.com/es/smartphones/galaxy-s25-ultra/images/galaxy-s25-ultra-features-ecosystem-galaxy-s25-mo.jpg?imbypass=true");

    const [phone, setPhone] = useState([]);

    const { smartphone_id } = useParams();

    const precio = parseInt(phone.precio);
    const totalPrecioEur = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(precio);

    const handleImageColors = (imageUrl) => {
        setImageColors(imageUrl);
    };

    const getPhoneById = async () => {
        const urlBackend = process.env.BACKEND_URL
        try {
            const response = await fetch(urlBackend + "phone/" + smartphone_id);

            const data = await response.json();

            setPhone(data);
        } catch (error) {
            console.error("Error getting ID phones from API");
        }
    };

    useEffect(() => {
        getPhoneById()
    }, []);

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row col-md-12">
                    <div id="phoneCarousel" className="carousel slide col-md-6 card-individual-image" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-flex justify-content-center mb-5">
                                    <img className="col-md-12" src="https://static.fnac-static.com/multimedia/Images/ES/NR/6e/b7/92/9615214/1540-1.jpg" alt="Slide 1" />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center mb-5">
                                    <img className="col-md-12" src="https://static.fnac-static.com/multimedia/Images/ES/NR/6e/b7/92/9615214/1520-4.jpg" alt="Slide 2" />
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#phoneCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#phoneCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="col-md-6 text-black">
                        <div className="card-body-individual">
                            <h5 className="card-title sub-titulo mb-3 titulo">{phone?.modelo}</h5>
                            <p className="card-text-score"></p>
                            <p className="card-text-price titulo">
                                <small className="text-black">{totalPrecioEur}</small>
                            </p>
                            <p className="card-text">
                                <button className="btn-add-cart texto">
                                    <i className="fa-solid fa-cart-plus mb-1"></i> Añadir al carrito
                                </button>
                            </p>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTop" aria-expanded="false" aria-controls="collapseTop">
                                            <strong className="texto">Descripción</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseTop" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="texto">{phone?.descripcion}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            <strong className="texto">Colores</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="row ms-2">
                                                <div className="col-md-4 d-flex flex-column align-items-center">
                                                    <h6 className="title-color ms-4">Azul</h6>
                                                    <ProductColors image="https://static.fnac-static.com/multimedia/Images/ES/NR/69/b7/92/9615209/1540-1.jpg" />
                                                </div>
                                                <div className="col-md-4 d-flex flex-column align-items-center">
                                                    <h6 className="title-color ms-4">Negro</h6>
                                                    <ProductColors image="https://static.fnac-static.com/multimedia/Images/ES/NR/6e/b7/92/9615214/1540-1.jpg" />
                                                </div>
                                                <div className="col-md-4 d-flex flex-column align-items-center">
                                                    <h6 className="title-color ms-4">Plata</h6>
                                                    <ProductColors image="https://static.fnac-static.com/multimedia/Images/ES/NR/6c/b7/92/9615212/1540-1.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <strong className="texto">Cámara</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="texto">{phone?.camara}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <strong className="texto">Almacenamiento</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="texto">{phone?.almacenamiento}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <strong className="texto">Memoria RAM</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="texto">{phone?.memoria_ram}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            <strong className="texto">Pantalla</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="texto">{phone?.pantalla}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            <strong className="texto">Batería</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="texto">{phone?.bateria}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                            <strong className="texto">Procesador</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="texto">{phone?.procesador}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-center text-black texto related-products">Productos relacionados (Smartphones)</h1>
        </div>
    );
};
