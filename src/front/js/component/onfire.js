import React from "react";
import {OnFireItem} from "./onfireitem"

export const Onfire = () => {
    return(<>
    <div className="row d-flex justify-content-center py-3 px-0 mx-0">
        <div className="col-5">
    <OnFireItem/>
    </div>
    <div className="col-5">
    <OnFireItem/>
    </div>
    </div>
    </>)
}