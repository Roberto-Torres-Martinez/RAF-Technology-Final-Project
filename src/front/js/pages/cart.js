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
            <div className="container-fluid negative-background" style={{backgroundColor : "rgb(234, 248, 252)"}}>
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