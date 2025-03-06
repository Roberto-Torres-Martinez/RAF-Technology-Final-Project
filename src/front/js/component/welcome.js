import React from "react";
import { Link } from "react-router-dom";

export const Welcome = () => {
    return (<>
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    {/* <img src="https://i.ytimg.com/vi/CJwhh4nrdy8/maxresdefault.jpg" className="d-block w-100" alt="..."/> */}
                    <div className="d-block w-100" >
                        <div className="welcome text-white mb-0 pb-0">
                            <p className="titulo d-flex justify-content-center display-1" style={{ color: "rgb(102, 252, 241)" }}>Bienvenidos</p>
                            <p className=" sub-titulo d-flex justify-content-center fs-4" style={{ color: "#5ce3d9" }}>Queridos internautas</p>
                            <p className=" texto d-flex justify-content-center px-5 fs-3">Tecnologia  en demanda, en la puerta de tu casa, tu mejor version tecnologica te espera.</p>
                        </div>
                        <div className="d-flex justify-content-center w-100 pb-0 pt-0 mt-0 mb-5">
                            <div className="rounded border border-info-subtle border-4">
                                <p className="texto m-2 fs-3 text-white">Avanzar</p>
                            </div>
                        </div>

                    </div>
                </div>
                <Link to={'/tendencias'}>
                    <div className="carousel-item">
                        <h1 className="text-center text-white titulo">Productos en Tendencia</h1>
                        <img src="https://static.wikia.nocookie.net/dragonuniverse/images/5/5b/Gogeta_Blue.png/revision/latest/scale-to-width-down/985?cb=20190417025204" className="d-block w-100" alt="..." />
                    </div>
                </Link>
                    <div className="carousel-item">
                        <h1 className="text-center text-white titulo">Novedades</h1>
                        <img src="https://static.wikia.nocookie.net/dragonball/images/d/db/Ssg-vegeta-dragon-ball-super-broly-1146238-1280x0.jpeg/revision/latest/scale-to-width-down/985?cb=20181202154441" className="d-block w-100" alt="..." />
                    </div>
                <div className="carousel-item">
                    <h1 className="text-center text-white titulo">Productos en Ofertas</h1>
                    <img src="https://static.wikia.nocookie.net/dragonball/images/d/db/Ssg-vegeta-dragon-ball-super-broly-1146238-1280x0.jpeg/revision/latest/scale-to-width-down/985?cb=20181202154441" className="d-block w-100" alt="..." />
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