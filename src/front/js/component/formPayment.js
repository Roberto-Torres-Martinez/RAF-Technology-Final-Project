import React, { useState } from "react";
import {  useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";



export const FormPayment = ({clientSecret}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
      

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        setLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements, 
            confirmParams:{
                return_url: 'https://super-duper-space-adventure-pjpjqx6q46qp27jgx-3000.app.github.dev/cart'
                },
                redirect: "if_required"
            },
        );

         setLoading(false);

        if (error) {
            setMessage(error.message)
        } else if (paymentIntent.status === 'succeeded') {
            setMessage("Pago confirmado!!!");
        }
        else {
            setMessage("Estado Inesperado")
        }
    };

    return (
        <>
            <form className="bg-light mx-auto w-50" onSubmit={handleSubmit}>
                <div className="container">
                    <PaymentElement/>
                </div>
                <button type="submit" disabled={!stripe || loading}>
                    <span>
                        {loading ? 'Procesando' : 'Pagar'}
                    </span>
                </button>
            </form>

        </>

    )
}