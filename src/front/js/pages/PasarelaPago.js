import React, { useState, useEffect } from "react";
import { FormPayment } from "../component/formPayment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const urlBackend = process.env.BACKEND_URL;
const stripePromise = loadStripe('pk_test_51QxWTcF1M5ixil84DV7yx8UcwpGMJXggd0XSjMwT493HuieKbKIf3nWo94YaWDYrl4A781CqNpXw5vww4Q3p3IBv00oAd5cnVd')
export const PasarelaPago = () => {
    const [clientSecret, setClientSecret] = useState(null);

    const paymentIntent = async () => {
        const response = await fetch(urlBackend + 'payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'amount': 1000,
                'currency': 'eur'
            })
        })
        const data = await response.json();
        if (data.client_secret) {
            setClientSecret(data.client_secret);
        } else {
            console.error('No se recibió el client_secret');
        }
    };

    console.log(clientSecret);

    useEffect(() => {
        paymentIntent();
    }, []);

    return(
        <>
            {stripePromise && clientSecret ? (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <FormPayment />
                </Elements>
            ) : (
                <p>Cargando pago...</p>
            )}
        </>
    );
}