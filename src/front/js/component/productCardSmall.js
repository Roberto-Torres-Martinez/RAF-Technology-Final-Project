import React from 'react';

export const ProductCardSmall = ({ product }) => {

    return (
        <div className="container content-small-card">
            <div className="col-md-12">
                <div className="card border-0 w-100 mb-4 text-white rounded-5 mx-auto">
                    <img src={product.imagen} className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
                    <div className="card-body border-card border-5 product">
                        <h5 className="card-title mb-0"><a href="#">{product.modelo}</a></h5>
                        <p className="fs-4 my-0 py-0"><b>{product.precio}</b></p>
                        <p className="card-text" style={{ fontSize: "0.8em" }}>{product.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

