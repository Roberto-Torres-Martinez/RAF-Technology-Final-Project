import React from "react";
import { useLocation } from "react-router-dom";

export const MessagePayment = () => {

    const location = useLocation();


    return (
        <div className="container-message container">
            <h1>{location.state?.message}</h1>
            <p>Gracias pot tu compra</p>
        </div>
    )

}