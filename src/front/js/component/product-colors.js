import React from "react";

export const ProductColors = ({src}) => {
    return (
        <div className="row col-md-4 d-flex justify-content-around">
            <span>
                <img src={src}className="img-small-vista-individual" />
            </span>
        </div>
    )
}