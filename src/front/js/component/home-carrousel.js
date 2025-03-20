import React from "react";
import { Link } from "react-router-dom";


export const Welcome = () => {
    return (<>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active " data-bs-interval="4000" >
                    <div className="d-block w-100" >
                        <div className="welcome text-white mb-0 pb-0">
                            <p className="titulo d-flex justify-content-center display-1" style={{ color: "rgb(102, 252, 241)" }}>Bienvenidos</p>
                            <p className=" sub-titulo d-flex justify-content-center fs-4" style={{ color: "#5ce3d9" }}>Queridos internautas</p>
                            <p className=" texto d-flex justify-content-center px-5 fs-3">Tecnologia  en demanda, en la puerta de tu casa, tu mejor version tecnologica te espera.</p>
                        </div>
                        <div className="d-flex justify-content-center w-100 pb-0 pt-0 mt-0 mb-5">
                            <div className=" rounded border border-info-subtle border-4">
                                <a href="#inicio" className="carrousel-button texto m-2 fs-3 text-white">Avanzar</a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="carousel-item" data-bs-interval="4000">
                    <Link to="/laptop-info/15">
                        <div className="carousel-image">
                            <img src="https://i.ibb.co/twzbS1dT/Tendencia-Pixelbook.jpg" className="d-block mx-auto object-fit-scale" alt="..." />
                        </div>
                    </Link>
                </div>

                <div className="carousel-item" data-bs-interval="4000">
                    <Link to="/smartphone-info/2">
                        <div className="carousel-image">
                            <img src="https://i.ibb.co/nHxxJn6/Novedad-iphone.jpg" className="d-block mx-auto object-fit-scale" alt="..." />
                        </div>
                    </Link>
                </div>
                <div className="carousel-item">
                    <Link to="/smartphone-info/1">
                        <div className="carousel-image">
                            <img src="https://i.ibb.co/5h2BB0Cy/Oferta-samsung.jpg" className="d-block mx-auto object-fit-scale" />
                        </div>
                    </Link>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div >
    </>)
}
