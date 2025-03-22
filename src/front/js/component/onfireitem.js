import React from 'react';

export const OnFireItem = ({ item, itemName }) => {

  let image = "";
  const validacionLista = () => {
    if (itemName == "phones" || itemName == "laptops") {
      const color = (item.colores?.[0].toLowerCase())?.replace(/ /g, "_");
      image = item.imagen?.[color];
    } else {
      image = item.imagen;
    }
  }

  validacionLista();

  return (<>
    <div className="content-tendencia">
      <div className="container-image-tendencia">
        <img src={image?.[0]} className="card-img" alt="..." />
      </div>
      <span className="ribbon position-absolute top-0 start-0 rounded text-bg-danger">TENDENCIA<span className="visually-hidden">unread messages</span></span>
      <div className="fire-container text-bg-dark text-end p-4">
        <h5 className="card-title">{item.modelo}</h5>
        <p className="card-text"> {item.descripcion}</p>
      </div>
    </div>
  </>)
}