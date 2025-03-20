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
    <div className="card position-relative text-bg-dark">
      <div className="ratio ratio-16x9">
        <img src={image?.[0]} className="card-img" alt="..." />
      </div>
      <span className="ribbon position-absolute top-0 start-0 px-2 rounded text-bg-danger">TENDENCIA<span className="visually-hidden">unread messages</span></span>
      <div className="card-img-overlayp-0 fire-container text-end p-3">
        <h5 className="card-title">{item.modelo}</h5>
        <p className="card-text"> {item.descripcion}</p>
      </div>
    </div>
  </>)
}