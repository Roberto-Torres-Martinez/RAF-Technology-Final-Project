import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CatalogProductCard } from "../component/catalog-product-card";

export const SearchProduct = () => {
    const {store} = useContext(Context);

    

    return (
        <>
            <h1> soy la busqueda haciendo rebase</h1>
        </>
    )
}