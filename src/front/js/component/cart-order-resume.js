import React from "react";

export const OrderResume = () => {
    return (
        <>
            <div className="container-fluid my-5">
                <div>
                    <h4>Resumen del pedido</h4>
                    <div className="bg-white p-2 rounded">
                        <table class="table">
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
                        <div className="p-2">
                            <h4>Subtotal(3 productos) :</h4><br />
                            <h1 className="d-flex justify-content-end pe-3">300 €</h1>
                        </div>
                        <div className="d-flex justify-content-center ">
                            <button className="btn btn-danger rounded-5">Continuar con mi pedido</button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}