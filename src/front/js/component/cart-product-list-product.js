import React from "react";


export const ListProduct = () => {
return(
    <>
    <div className="container">
        <div className="row card-cart-product p-3 rounded border border-1 border-light">
            <div className="col-md-2 col-sm-1 px-0">
                <div>
                <div className="ratio ratio-1x1">
                <img src="https://i.scdn.co/image/ab67616d0000b273234e388847733590e0289551"/>
                </div>
                </div>
            </div>
            <div className="col-lg-7 col-sm-10">
                <div>
                <span><p className="title-cart-product">Sukuna</p></span>
                <span><p className="description-cart-product">Su pasada apariencia lo describe como un demonio de cuatro brazos y dos rostros.</p></span>
                </div>
            </div>
            <div className="col-lg-2 col-sm-12">
                <div className="d-flex justify-content-around">
                <p>Cantidad:</p>
                <p><b>x1</b></p>
                </div>
                <div className="d-flex justify-content-end align-items-center h-75">
                <button className="btn cart-delete-button rounded">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
    </>
)
}