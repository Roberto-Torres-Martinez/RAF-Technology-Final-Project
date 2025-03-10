import React from 'react';
import { ListProduct } from './cart-product-list-product';

export const ProductList = () => {
    return (
        <>
            <div className="container-fluid my-5">
                <div>
                    <div className="container-fluid mb-5">
                        <h1>Carrito</h1>
                        <span><p>Lista de productos en tu carrito personal</p></span>
                        <div className="p-2">
                            <ListProduct />
                        </div>
                        <div className="p-2">
                            <ListProduct />
                        </div>
                        <div className="p-2">
                            <ListProduct />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}