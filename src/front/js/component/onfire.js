import React from "react";
import {OnFireItem} from "./onfireitem"

export const Onfire = () => {
    return(<>
    <div className="row d-flex justify-content-around py-3 px-0 mx-auto ">
        <div className="col-md-6">
    <OnFireItem/>
    </div>
    <div className="col-md-6">
    <OnFireItem/>
    </div>
    </div>
    </>)
}