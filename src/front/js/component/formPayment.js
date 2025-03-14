import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const urlBackend = process.env.BACKEND_URL;

export const FormPayment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [loading, setLoading] = useState(false);

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

    useEffect(() => {
        paymentIntent();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setLoading(true);

        const { error, paymentIntent } = await stripe.confirmCardPayment(
            clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                },
            },
        );

        setLoading(false);

        if (error) {
            console.log('[error]', error);
        } else if (paymentIntent.status === 'succeeded') {
            console.log('Payment succeeded!');
        }
        else {
            console.log('some error')
        }
    };

    return (
        <>
            <form className="w-50 bg-light mx-auto" onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe || loading}>
                    Pay
                </button>
            </form>

        </>

    )
}