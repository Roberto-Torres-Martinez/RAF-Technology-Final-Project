import React from "react";
import { ProductCardSmall } from "./productCardSmall";

export const RelatedProducts = () => {
    return (
        <>
            <div className="container my-5 related-container">
                <h1 className="mb-5 text-white text-center">Productos Relacionados (Smartphones)</h1>
                <div className="section container mx-3 pt-5 px-5 pb-1 border-techno border-4 mt-4 mx-auto">
                    <div className="row justify-content-around">
                        <div className="col-md-3 mb-5">
                            <ProductCardSmall />
                        </div>
                        <div className="col-md-3 mb-5">
                            <ProductCardSmall />
                        </div>
                        <div className="col-md-3 mb-5">
                            <ProductCardSmall />
                        </div>
                        <div className="col-md-3 mb-5">
                            <ProductCardSmall />
                        </div>
                        <div className="col-md-3 mb-5">
                            <ProductCardSmall />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
