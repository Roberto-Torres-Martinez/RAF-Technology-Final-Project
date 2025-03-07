import React from "react";
import { ProductCardSmall } from "./productCardSmall";

export const RelatedProducts = () => {
    return (
        <div className="container my-5">
            <h1 className="ms-5 mb-2 text-white"></h1>
            <div className="section container pt-5 px-4 pb-4 border-techno border-4 mt-4">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 mx-0">
                    <div className="col d-flex justify-content-center">
                        <ProductCardSmall />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <ProductCardSmall />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <ProductCardSmall />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <ProductCardSmall />
                    </div>
                </div>
            </div>
        </div>
    );
};
