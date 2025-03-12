import React from "react";

export const OrderResume = () => {
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
                                <tr>
                                    <td>Sukuna</td>
                                    <td>2</td>
                                    <td>100 €</td>
                                </tr>
                                <tr>
                                    <td>Sukuna</td>
                                    <td>3</td>
                                    <td>150 €</td>
                                </tr>
                                <tr>

                                    <td>Sukuna</td>
                                    <td>1</td>
                                    <td>50 €</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <div className="sub-total-container">
                        <div className="p-2 sub-total-text">
                            <h4>Subtotal(3 productos) :</h4><br />
                            <span>
                            <p className="d-flex justify-content-end pe-3 sub-total-resume">300 €</p>
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