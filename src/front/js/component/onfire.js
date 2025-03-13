import React, { useContext } from "react";
import {OnFireItem} from "./onfireitem"
import { Context } from "../store/appContext";


export const Onfire = ({type1, id1, type2, id2}) => {

    // const {store} = useContext(Context)

    // const products1 = store[type1]
    // const products2 = store[type2]
    // let individualProductId1 = ""
    // let individualProductId2 = ""
    // let fireItem1 = ""
    // let fireItem2 = ""

    // const getIndividualProductId1 = () => {
    //     if(type1 == "phones"){
    //         individualProductId1 = "smartphone_id"
    //     } else if(type1 == "tvs"){
    //         individualProductId1 = "tv_id"
    //     } else if(type1="laptops"){
    //         individualProductId1 = "laptop_id"
    //     }
    // }

    // const getIndividualProductId2 = () => {
    //     if(type2 == "phones"){
    //         individualProductId2 = "smartphone_id"
    //     } else if(type2 == "tvs"){
    //         individualProductId2 = "tv_id"
    //     } else if(type2="laptops"){
    //         individualProductId2 = "laptop_id"
    //     }
    // }

    // getIndividualProductId1()
    // getIndividualProductId2()

    // const findFireItems = (firstProducts, firstId, secondProducts, secondId) => {

    //     fireItem1 = firstProducts.filter((individualProduct)=> individualProduct[individualProductId1] == firstId)
    //     fireItem2 = secondProducts.filter((individualProduct)=> individualProduct[individualProductId2] == secondId)

    // }

    // findFireItems(products1, id1, products2, id2)

    // console.log(fireItem1[0])
    // console.log(fireItem2[0])
    

    return(<>
    <div id="inicio" className="row d-flex justify-content-around py-3 px-0 mx-auto ">
        <div className="col-md-6">
    <OnFireItem/>
    </div>
    <div className="col-md-6">
    <OnFireItem/>
    </div>
    </div>
    </>)
}