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


    useEffect(() => {
        paymentIntent();
    }, []);

    const appearance = {
        theme: 'night',
        variables: {
          fontFamily: 'Sohne, system-ui, sans-serif',
          fontWeightNormal: '500',
          borderRadius: '8px',
          colorBackground: '#0A2540',
          colorPrimary: '#EFC078',
          accessibleColorOnColorPrimary: '#1A1B25',
          colorText: 'white',
          colorTextSecondary: 'white',
          colorTextPlaceholder: '#ABB2BF',
          tabIconColor: 'white',
          logoColor: 'dark'
        },
        rules: {
          '.Input': {
            backgroundColor: '#212D63',
            border: '1px solid var(--colorPrimary)'
          }
        }
      };

    return(
        <>
            {stripePromise && clientSecret ? (
                <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
                    <FormPayment clientSecret={clientSecret}/>
                </Elements>
            ) : (
                <p>Cargando pago...</p>
            )}
        </>
    );
}