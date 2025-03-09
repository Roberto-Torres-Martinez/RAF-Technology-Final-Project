import React from 'react';


export const ProductCard = ({ product, name }) => {

    let images = "";
    const validacionLista = (producto) => {
        if (producto == "Laptops" || producto == "Moviles") {
            const color = (product.colores[0].toLowerCase()).replace(/ /g, "_")
            images = product.imagen[color]
        }
        else {
            images = product.imagen
        }
    }

    validacionLista(name);

    return (
        <>

            <div className="container_card_home">

                <div className="card_home">
                    <div className='container_img'>
                        <img src={images[0]} />
                    </div>
                    <h4>{product.modelo}</h4>
                    <h5>{product.precio}</h5>
                    <div className='card_description'>
                        <p>{product.descripcion}</p>
                    </div>
                </div>

            </div>

            {/* <div className="card border-0 w-100 mb-5 text-white" >
                <header>
                    <img src={images[0]} className="card-img-top object-fit-cover" alt="..." />
                </header>
                <div className="card-body border-card border-5 product">
                    <h5 className="card-title mb-0">{product.modelo}</h5>
                    <p className="fs-4 my-0 py-0"><b>{product.precio}</b></p>
                </div>
                <footer>
                    <p className="card-text" style={{ fontSize: "0.8em" }}>{product.descripcion}</p>
                </footer>
            </div> */}
        </>
    )
}