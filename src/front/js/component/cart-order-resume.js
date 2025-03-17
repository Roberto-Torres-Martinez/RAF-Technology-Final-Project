import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const OrderResume = () => {

    const { store } = useContext(Context)
    let subtotal = 0;
    let totalPrecioEur = ""
    let cantidad = 0

    return (
        <>
            <div className="container-fluid order-resume">
                <div>
                    <div className="container-fluid">
                        <h4>Resumen del pedido</h4>
                        <div className="bg-white pe-2 pt-2 ps-2 pb-1 rounded mt-5">
                            <div className="order-resume-table-container">
                                <table class="table order-resume-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Precio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {store.cart.map((item) => {
                                            cantidad += 1
                                            subtotal += Number((item.precio).replace(/ €/g, "")) * Number(item.cantidad)
                                            totalPrecioEur = new Intl.NumberFormat("de-DE", {
                                                style: "currency",
                                                currency: "EUR",
                                            }).format(subtotal)

                                            return (
                                                <>

                                                    <tr>
                                                        <td>{item.modelo}</td>
                                                        <td>{item.cantidad}</td>
                                                        <td>{new Intl.NumberFormat("de-DE", {
                                                            style: "currency",
                                                            currency: "EUR",
                                                        }).format(Number((item.precio).replace(/ €/g, "")) * Number(item.cantidad))}</td>
                                                    </tr>
                                                </>
                                            )
                                        })}


                                    </tbody>
                                </table>
                            </div>
                            <div className="sub-total-container">
                                <div className="p-2 sub-total-text">
                                    <h4>Subtotal({cantidad} productos) :</h4><br />
                                    <span>
                                        <p className="d-flex justify-content-end pe-3 sub-total-resume">{totalPrecioEur}</p>
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-0 pt-5">
                                <button className="btn btn-danger rounded-5 resume-button">Continuar con mi pedido</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}