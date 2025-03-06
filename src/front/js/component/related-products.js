import React from "react"
import { ProductCardSmall } from "./productCardSmall"

export const RelatedProducts = () => {
    return (
        <div className="container my-5">
            <h1 className="ms-5 mb-2 text-white"></h1>
            <div className="section container mx-3 pt-5 px-5 pb-1 border-techno border-4 mt-4 mx-auto">
                <div className="row justify-content-around">
                    <div className="col-md-3">
                        <ProductCardSmall />
                    </div>
                    <div className="col-md-3">
                    <ProductCardSmall />
                    </div>
                    <div className="col-md-3">
                    <ProductCardSmall />
                    </div>
                    <div className="col-md-3">
                    <ProductCardSmall />
                    </div>
                </div>
            </div>
        </div>
    )
}