import React from "react";
import { useLocation } from "react-router-dom";

export const MessagePayment = () => {

    const location = useLocation();

    return (
        <div className="container-message container">
            <h1>{location.state?.message}</h1>
            <p>Gracias pot tu compra</p>
            <div className="container-img-payment">
                <img src="https://png.pngtree.com/png-clipart/20240619/original/pngtree-payment-confirmation-icon-vector-logo-png-image_15370585.png"/>
            </div>
        </div>
    )

}