import React from 'react';

export const OnFireItem = () => {
    return(<>
    <div className="card text-bg-dark">
        <div className="ratio ratio-16x9">
         <img src="https://www.mundodeportivo.com/alfabeta/hero/2024/09/devil-may-cry.webp?width=768&aspect_ratio=16:9&format=nowebp" className="card-img" alt="..."/>
        </div>
  <div className="card-img-overlay p-0 fire-container text-end p-3 position-relavite">
  <span className="position-absolute top-25 start-25 rounded-pill text-bg-secondary">+99 <span className="visually-hidden">unread messages</span></span>
    <h5 className="card-title">Devil May Cry</h5>
    <p className="card-text"> Una historia que te dejará los pelos de punta</p>
  </div>
</div>
    </>)
}