import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { ProductList } from '../component/cart-product-list';
import { OrderResume } from '../component/cart-order-resume';


export const Cart = () => {


    const { actions } = useContext(Context)


    useEffect(() => {
        actions.setNegativeColors()
        actions.setNavbarVisibility()
    }, [])

    return (
        <>
            <div className="container-fluid negative-background">
                <div className="row justify-content-around">
                    <div className="col-8">
                        <ProductList />
                    </div>
                    <div className="col-3">
                        <OrderResume />
                    </div>
                </div>
            </div>
        </>
    )
}