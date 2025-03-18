import React from "react";
import { Link } from "react-router-dom";

export const MessagePayment = () => {
    return (
        <main className="container-message container">
            <h1>Gracias por tu compra!!!!</h1>
            <section className="container-img-payment">
                <img src="https://agenciapromarketing.com/wp-content/uploads/2020/03/BANNER-PAGO-EXITOSO-1.png"/>
            </section>
            <section className="container-button-confirm">
                <Link to={"/"}>
                    <button>Página principal</button>
                </Link>
                <Link to={"/phones-catalog"}>
                    <button>Ver Móviles</button>
                </Link>
                <Link to={"/laptops-catalog"}>
                    <button>Ver Laptops</button>
                </Link>
                <Link to={"/tvs-catalog"}>
                    <button>Ver Televisores</button>
                </Link>
                <Link to={"/cart"}>
                    <button>Carrito de compras</button>
                </Link>
            </section>
        </main>
    )
}