import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CatalogProductCard } from "../component/catalog-product-card";

export const SearchProduct = () => {
    const {store} = useContext(Context);

    let products = [];
	const phones = store.phones;
	const tvs = store.tvs;
	const laptops = store.laptops;

	products = phones.concat(laptops, tvs);

    return (
        <>
            <h1> soy la busqueda</h1>
        </>
    )
}