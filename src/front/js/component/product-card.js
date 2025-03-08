import React, { useEffect, useState } from 'react';

const urlBackend = process.env.BACKEND_URL;

export const ProductCard = ({model, price, description}) => {
   

    return (
        <>
            <div className="card border-0 w-100 mb-5 text-white">
                <img src="https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202409/10/00194612201288____11__1200x1200.jpg" className="card-img-top" alt="..." />
                <div className="card-body border-card border-5 product">
                    <h5 className="card-title mb-0"><a href="#">{model}</a></h5>
                    <p className="fs-4 my-0 py-0"><b>{price}</b></p>
                    <p className="card-text" style={{ fontSize: "0.8em" }}>{description}</p>
                </div>
            </div>
        </>
    )
}