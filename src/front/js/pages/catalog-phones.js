import React from "react";
import { ProductCardSmall } from "../component/productCardSmall";

export const CatalogPhones = () => {
    return (
        <>
            <div className="container">
                <div className="row col-md-12">
                    <div className="carrusel-catalogo">
                        <h1>hola</h1>
                    </div>
                </div>
                <div className="row col-md-12">
                    <div className="text-center text-white mt-5 mb-5">
                        <h1>Catálogo de productos móviles</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-3 mb-5 d-flex justify-content-center">
                        <ProductCardSmall />
                    </div>
                    <div className="col-md-3 mb-5 d-flex justify-content-center">
                        <ProductCardSmall />
                    </div>
                    <div className="col-md-3 mb-5 d-flex justify-content-center">
                        <ProductCardSmall />
                    </div>
                    <div className="col-md-3 mb-5 d-flex justify-content-center">
                        <ProductCardSmall />
                    </div>
                    <div className="col-md-3 mb-5 d-flex justify-content-center">
                        <ProductCardSmall />
                    </div>
                    <div className="col-md-3 mb-5 d-flex justify-content-center">
                        <ProductCardSmall />
                    </div>
                    <div className="col-md-3 mb-5 d-flex justify-content-center">
                        <ProductCardSmall />
                    </div>
                    <div className="col-md-3 mb-5 d-flex justify-content-center">
                        <ProductCardSmall />
                    </div>
                    <div className="col-md-3 mb-5 d-flex justify-content-center">
                        <ProductCardSmall />
                    </div>
                    <div className="col-md-3 mb-5 d-flex justify-content-center">
                        <ProductCardSmall />
                    </div>
                    <div className="col-md-3 mb-5 d-flex justify-content-center">
                        <ProductCardSmall />
                    </div>
                </div>
            </div>
        </>
    )
}

