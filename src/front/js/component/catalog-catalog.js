import React, { useContext } from 'react';
import { CatalogProductCard } from './catalog-product-card';
import { Context } from '../store/appContext';

export const CatalogCatalog = ({ productList }) => {

    const { store } = useContext(Context)
    const products = store[productList]
    let titulo = ""
    if (productList == "phones") {
        titulo = "de Móviles"
    }
    else if (productList == "tvs") {
        titulo = "de TVs"
    }
    else if (productList == "laptops") {
        titulo = "de Portátiles"
    }




    return (
        <>
            <div className="container ">
                <h1 className="d-flex justify-content-center text-white">Catálogo {titulo}</h1>
                <div className="catalog-section-catalog-phones">
                    <div className="row">
                        {products.map((product, index) => {
                            return (
                                <div className="col-4">
                                    <div className="p-3">
                                        <CatalogProductCard
                                            key={index}
                                            product={product}
                                            productName={productList} />
                                    </div>
                                </div>)
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}