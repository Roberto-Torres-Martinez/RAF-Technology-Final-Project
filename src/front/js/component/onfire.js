import React from "react";
import {OnFireItem} from "./onfireitem"

export const Onfire = () => {
    return(<>
    <div className="row d-flex py-3 px-0 mx-0">
        <div className="col-6">
    <OnFireItem/>
    </div>
    <div className="col-6">
    <OnFireItem/>
    </div>
    </div>
    </>)
}