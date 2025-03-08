import React from "react";
import { WelcomeCatalog } from "../component/welcome-catalog-phones";
import { CatalogCatalog} from "../component/catalog-catalog-phones";


export const Catalog = ({productList}) => {


    return (
        <>
        <div className="p-3">
        <WelcomeCatalog/>
        <CatalogCatalog productList={productList}/>
        </div>
        </>
    )
}

