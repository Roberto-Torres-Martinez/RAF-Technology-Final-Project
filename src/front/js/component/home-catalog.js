import React from 'react';
import { ProductSection } from './product-section';

export const HomeCatalog = () => {
    return (
        <>
        <div className="container-fluid py-5">
        <ProductSection productos="Móviles"/>
        <ProductSection productos="TVs"/>
        <ProductSection productos="Laptops"/>
        </div>
        </>
    )
}