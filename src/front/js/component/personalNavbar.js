import React from 'react';

export const PersonalNavbar = () => {
    return (
        <>
        <div className="d-flex">
       <div className="profile-photo pe-3">
            <div className="ratio ratio-1x1" style={{width: "15em", height: "15em"}}>
                <div className="profile-circle">
                <img className="photo-personal-zone"src="https://media.cnn.com/api/v1/images/stellar/prod/cnne-212344-monkey-selfie.jpeg?c=16x9&q=h_833,w_1480,c_fill"/>
                </div>
            </div>
        </div>
        <div className="text">
        <div className="align-middle">
            <p>Hola, <b>Usuario</b>!</p>
            </div>
        </div>
        </div>
        </>
    )
}