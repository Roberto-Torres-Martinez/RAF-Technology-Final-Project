import React from 'react';

export const ProductCardSmall = () => {
    return (
        <>
            <div className="container content-small-card">
                <div className="col-md-12">
                    <div className="card border-0 w-100 mb-4 text-white rounded-5 mx-auto">
                        <img src="https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202409/10/00194612201288____11__1200x1200.jpg" className="card-img-top" alt="..." style={{ height: '150px', objectFit: 'cover' }} />
                        <div className="card-body border-card border-5 product">
                            <h5 className="card-title mb-0"><a href="#">Card title</a></h5>
                            <p className="fs-4 my-0 py-0"><b>699,99 €</b></p>
                            <p className="card-text" style={{ fontSize: "0.8em" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}