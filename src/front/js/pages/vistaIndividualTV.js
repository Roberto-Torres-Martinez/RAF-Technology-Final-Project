import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { RelatedProducts } from "../component/related-products";
import { useParams } from "react-router-dom";

export const VistaIndividualTv = ({product, productName}) => {

    const [tv, setTv] = useState([]);

    const { store, actions } = useContext(Context)

    const { tv_id } = useParams();

    const precio = parseInt(tv.precio);
    const totalPrecioEur = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(precio);

    const handleImageColors = (imageUrl) => {
        setImageColors(imageUrl);
    };

    const getTvById = async () => {
        const urlBackend = process.env.BACKEND_URL
        try {
            const response = await fetch(urlBackend + "tv/" + tv_id);

            const data = await response.json();

            setTv(data);
        } catch (error) {
            console.error("Error getting ID TVs from API");
        }
    };

    useEffect(() => {
        getTvById()
    }, []);

    useEffect(() => {
        actions.setNegativeColors()
        actions.setNavbarVisibility()
    }, [])

    return (
        <div className="container">
            <div className="row col-md-12">
                <div className="row col-md-6 card-individual-tv-image">
                    <img className="mb-5" src="https://www.bhphotovideo.com/images/images2500x2500/samsung_qn65qn90cafxza_neo_qled_qn90c_65_1742740.jpg" alt="Product" />
                </div>
                <div className="col-md-6 text-white mb-5">
                    <div className="card-body-individual">
                        <h5 className="card-title titulo mb-3">{tv?.modelo}</h5>
                        <p className="card-text-score"></p>
                        <p className="card-text-price titulo">
                            <small className="text-white">{totalPrecioEur}</small>
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
                                        <p className="texto">{tv?.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <strong className="texto">Marca</strong>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="texto">{tv?.marca}</p>
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
                                        <p className="texto">{tv?.pantalla}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <strong className="texto">Medidas</strong>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="texto">{tv?.medidas}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <strong className="texto">Usos Recomendados</strong>
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="texto">{tv?.usos_recomendados}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        <strong className="texto">Año Modelo</strong>
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="texto">{tv?.año_modelo}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        <strong className="texto">Conectividad</strong>
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="texto">{tv?.conectividad}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        <strong className="texto">Contenido De La Caja</strong>
                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="texto">{tv?.contenido_de_la_caja}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                        <strong className="texto">Usos Recomendados</strong>
                                    </button>
                                </h2>
                                <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="texto">{tv?.usos_recomendados}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                        <strong className="texto">Fabricante</strong>
                                    </button>
                                </h2>
                                <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="texto">{tv?.fabricante}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-center text-white texto related-products">Productos relacionados (TVs)</h1>
            <RelatedProducts />
        </div>
    );
};
