import React, { useContext } from "react";
import { ProductCardSmall } from "./productCardSmall";
import { Context } from "../store/appContext";

export const RelatedProducts = ({ productType }) => {
    const { store } = useContext(Context);

    const products = productType === "phones" ? store.phones : productType === "tvs" ? store.tvs : store.laptops;

    const relatedCarruselProducts = [];
    for (let i = 0; i < products.length; i += 5) {
        relatedCarruselProducts.push(products.slice(i, i + 5));
    }

    return (
        <div className="container-fluid">
            <div className="container my-5">
                <div className="section container mx-3 pt-5 px-5 pb-1 border-techno border-4 mt-4 mx-auto">
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {relatedCarruselProducts.map((products, index) => (
                                <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                    <div className="d-flex justify-content-center">
                                        {products.map((product) => (
                                            <div className="col-md-2 p-2" key={product.id}>
                                                <ProductCardSmall product={product} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};
