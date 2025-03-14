import React from "react";
import { FormPayment } from "../component/formPayment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51QxWTcF1M5ixil84DV7yx8UcwpGMJXggd0XSjMwT493HuieKbKIf3nWo94YaWDYrl4A781CqNpXw5vww4Q3p3IBv00oAd5cnVd')
export const PasarelaPago = () => {

    return(
        <Elements stripe={stripePromise}>
            <FormPayment/>
        </Elements>
    );
}