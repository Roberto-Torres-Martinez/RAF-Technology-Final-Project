import React from 'react';

export const PersonalNavbar = () => {
    return (
        <>
        <div className="d-flex mb-4 pt-4 ms-5">
       <div className="profile-photo pe-3">
            <div className="ratio ratio-1x1" style={{width: "10em", height: "10em"}}>
                <div className="profile-circle">
                <img className="photo-personal-zone"src="https://media.cnn.com/api/v1/images/stellar/prod/cnne-212344-monkey-selfie.jpeg?c=16x9&q=h_833,w_1480,c_fill"/>
                </div>
            </div>
        </div>
        <div className="text my-auto fs-3">
            <div className="mb-0 pb-0">
            <p className="mb-0">Hola, <b>Usuario</b>!</p>
            </div>
            <div className="mt-0">
            <button type="button" className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i> Editar información</button>
            </div>
        </div>
        </div>
        </>
    )
}