import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../apiservices/callToApi";


export const LogIn = () => {

    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();


    const handleEmail = (e) => {
        setUserEmail({...userEmail, [e.target.name]: e.target.value});
    };

    const handlePassword = (e) => {
        setUserPassword({...userPassword, [e.target.name]: e.target.value});
    };


    useEffect(()=>{},[])

    console.log(userEmail);
    console.log(userPassword);
    


    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{backgroundColor: "rgb(47, 65, 79)"}}>
                <div className="row md-col-12">
                    <h1 className="text-white titulo mt-3 text-center title-login">Log In</h1>
                    <form className="border border-light rounded-3 mb-5">
                        <div className="texto">
                            <label htmlFor="EmailOrUsername" className="form-label text-white mt-4">Email o Nombre de usuario</label>
                            <input type="text" className="form-control" name={"EmailOrUsername"} onChange={e => handleEmail(e)} aria-describedby="emailHelp" placeholder="Email o Nombre de usuario" />
                        </div>
                        <div className="texto">
                            <label htmlFor="password" className="form-label text-white mt-4">Comtraseña</label>
                            <input type="password" className="form-control" name="password" onChange={e => handlePassword(e)} placeholder="example123"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input mt-4" id="exampleCheck1" />
                            <label className="form-check-label text-white mt-4 texto" htmlFor="exampleCheck1">Recuerdame</label>
                            <div style={{marginTop: '20px'}}>
                                <span className="text-white mt-4 texto">¿No tienes una cuenta?</span> <span><Link to={'/signup'}><span style={{color: 'rgb(102, 252, 241)'}}>Crear Usuario</span></Link></span>
                            </div>
                        </div>
                        <button type="submit" className="btn button-submit mt-5 mb-4 text-white texto">Continuar</button>
                    </form>
                </div>
            </div>
        </>
    )
}