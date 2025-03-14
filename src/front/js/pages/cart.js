import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { ProductList } from '../component/cart-product-list';
import { OrderResume } from '../component/cart-order-resume';
import { getCart } from '../apiservices/callToApi';


export const Cart = () => {


    const { actions } = useContext(Context)


    useEffect(() => {
        actions.setNegativeColors()
        actions.setNavbarVisibility()
    }, [])

    return (
        <>
            <button onClick={() => getCart(1)}>
                Console log pedido
            </button>
            <div className="container-fluid negative-background cart" style={{ backgroundColor: "rgb(234, 248, 252)" }}>
                <div className="row justify-content-around mx-3">
                    <div className="col-lg-7 col-sm-12">
                        <ProductList />
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <OrderResume />
                    </div>
                </div>
            </div>
        </>
    )
}