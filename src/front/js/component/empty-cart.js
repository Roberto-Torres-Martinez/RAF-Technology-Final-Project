import React from 'react';
import { Link } from 'react-router-dom';

export const EmptyCart = () => {
    return (<>
        <div className="bg-white rounded my-5 d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center">
                <h1>Carro vacío</h1>
            
            <div className="m-2 d-flex border flex-column align-items-center justify-content-center rounded" style={{backgroundColor: "rgb(250, 250, 250)"}}>
                <div className="empty-cart-image">
                    <div className="ratio ratio-1x1">
                        <img src="https://i.ibb.co/Q7GtR7m8/carro-vacio.jpg" />
                    </div>
                </div>
                <div>
                    <div className="px-4">
                        <span> <p>Aquí se muestra tu lista de productos mientras hayas ingresado a tu cuenta. <br/>
                            En caso de no haber ingresado puedes ingresar en el siguiente link: <Link to="/login"><a>Ingresar</a></Link>,<br/> o registrarte en caso de no haberlo hecho: <Link to="/signup"><a>Registrarse</a>.</Link></p></span>
                    </div>
                </div>

            </div>
            </div>
        </div>
            <div>

                <Link to="/phones-catalog">
                    <button className="btn btn-success rounded-pill mx-2">Ver catálogo de móviles</button>
                </Link>
                <Link to="/laptops-catalog">
                    <button className="btn btn-success rounded-pill mx-2">Ver catálogo de portátiles</button>
                </Link>
                <Link to="/tvs-catalog">
                    <button className="btn btn-success rounded-pill mx-2">Ver catálogo de televisores</button>
                </Link>
            </div>
    </>)
}