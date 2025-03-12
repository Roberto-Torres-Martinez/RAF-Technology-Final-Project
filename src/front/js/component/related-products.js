import React from "react";
import { ProductCardSmall } from "./productCardSmall";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useEffect } from "react";

export const RelatedProducts = ({}) => {

    const { store, actions } = useContext(Context);

    return (
        <div className="container my-5">
            <div className="section container mx-3 pt-5 px-5 pb-1 border-techno border-4 mt-4 mx-auto">
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex justify-content-center mb-5">
                                {store.phones.map((phone, index) => (
                                    <div className="col-md-2 p-2" key={phone.id}>
                                        <ProductCardSmall product={phone} />
                                    </div>
                                ))}
                            </div>
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
                </div>
            </div>
        </div>
    );
};
