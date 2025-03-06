import React from 'react';

export const ProductCard = () => {
    return (
        <>
            <div className="card w-100 mb-5 text-white">
                <img src="https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202409/10/00194612201288____11__1200x1200.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body border rounded-bottom border-top-0 border-5 product">
                        <h5 className="card-title mb-0">Card title</h5>
                        <p className="fs-4 my-0 py-0"><b>$50</b></p>
                        <p className="card-text" style={{fontSize: "0.8em"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
            </div>
        </>
    )
}