import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../apiservices/callToApi";
import { Context } from "../store/appContext";



export const LogIn = () => {
    const [user, setUser] = useState();
    const [responseApi, setResponseApi] = useState({});
    const navigate = useNavigate();
    const { actions } = useContext(Context);


    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(user, setResponseApi, navigate);

    };

    useEffect(() => {
        actions.setPositiveColors();
        actions.setNoneNavbarVisibility();
    }, []);

    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ backgroundColor: "rgb(47, 65, 79)" }}>
                <div className="row md-col-12">
                    <div className="d-flex justify-content-center mt-5">
                        <Link to="/">
                            <i className="fa-solid fa-user-astronaut fs-2 text-white "></i>
                        </Link>
                    </div>
                    <h1 className="text-white titulo mt-3 text-center title-login">Iniciar sesion</h1>
                    <form className="border border-light rounded-3 mb-5" onSubmit={e => handleSubmit(e)}>
                        {responseApi.msg && <h6 style={{ color: 'red' }}>{responseApi.msg}</h6>}
                        <div className="texto">
                            <label htmlFor="email" className="form-label text-white mt-4">Email</label>
                            <input type="text" className="form-control" name={"email"} onChange={e => handleChange(e)} autoComplete="email" aria-describedby="emailHelp" placeholder="example@gmail.com" />
                        </div>
                        <div className="texto">
                            <label htmlFor="password" className="form-label text-white mt-4">Contraseña</label>
                            <input type="password" className="form-control" name="password" onChange={e => handleChange(e)} autoComplete="current-password" placeholder="example123" />
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <span className="text-white mt-4 texto">¿No tienes una cuenta?</span> <span><Link to={'/signup'}><span style={{ color: 'rgb(102, 252, 241)' }}>Crear Usuario</span></Link></span>
                        </div>
                        <button type="submit" className="btn button-submit mt-5 mb-4 text-white texto">Continuar</button>
                    </form>
                </div>
            </div>
        </>
    )
}