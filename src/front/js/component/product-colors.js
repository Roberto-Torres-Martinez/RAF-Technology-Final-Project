import React from "react";

export const ProductColors = ({image}) => {
    return (
        <div className="row col-md-4 d-flex justify-content-around">
            <span>
                <img className="img-small-vista-individual" src={image} />
            </span>
        </div>
    )
}