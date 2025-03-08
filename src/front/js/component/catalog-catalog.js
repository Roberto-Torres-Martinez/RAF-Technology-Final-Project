import React, { useContext } from 'react';
import { CatalogProductCard } from './catalog-product-card';
import { Context } from '../store/appContext';

export const CatalogCatalog = ({productList}) => {

    const { store } = useContext(Context)
    const products = store[productList]
    let titulo = ""
    if(productList == "phones"){
        titulo = "de Móviles"
    }
    else if(productList == "tvs"){
        titulo = "de TVs"
    }
    else if(productList == "laptops"){
        titulo = "de Portatiles"
    }

    return (
        <>
            <div className="container-fluid text-white">
                <h1 className="d-flex justify-content-center">Catálogo {titulo}</h1>
                <div className="catalog-section-catalog-phones">
                    <div className="row">
                        {products.map((product) => {
                            return (
                                <div className="col-3">
                                    <div className="p-3">
                                        <CatalogProductCard product={product} productName={productList} />
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