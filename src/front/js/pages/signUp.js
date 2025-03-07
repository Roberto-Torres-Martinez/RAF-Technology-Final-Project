import React, { useEffect, useState } from "react";
import { createUser, getUsers } from "../apiservices/callToApi";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [newUser, setNewUser] = useState();
    const [password, setPassword] = useState(true);
    const [userList, setUserList] = useState();
    const [userExist, setUserExist] = useState(false);
    const navigate = useNavigate();    

    const handleChange = (e) =>{
        setNewUser({...newUser, [e.target.name]: e.target.value});
    };
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        createUser(newUser);
        navigate('/login');
    };

    useEffect(()=>{
        if (newUser){
            if (newUser.password && newUser.confirmPassword){
                    if(newUser.password != newUser.confirmPassword){
                        setPassword(false);
                    }else{
                        setPassword(true);
                    };
            }else{
                setPassword(true);
            };  

            if(newUser.email || newUser.username){
                if(userList.includes(newUser.email) || userList.includes(newUser.username)){
                    setUserExist(true);
                }else{
                    setUserExist(false);
                };
            };
        };   
    },[newUser]);

    useEffect(()=>{
        getUsers(setUserList);
    }, []);

    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100 " style={{backgroundColor: "rgb(47, 65, 79)"}}>
                <div className="row md-col-12 form-signup">
                    <h1 className="text-white titulo text-center title-signup">Crear Cuenta</h1>
                    <form className="border border-light rounded-3" onSubmit={e => handleSubmit(e)}>
                        <div className="texto">
                            {userExist && <p style={{color: 'red'}}>Ya existe una cuenta asociado a este email o usuario </p>} 
                            <label htmlFor="name" className="form-label text-white mt-2">Nombre</label>
                            <input type="text" className="form-control" onChange={e => handleChange(e)} name="name" required placeholder="Nombre" />
                        </div>
                        <div className="texto">
                            <label htmlFor="lastname" className="form-label text-white mt-2">Apellidos</label>
                            <input type="text" className="form-control" onChange={e => handleChange(e)} name="lastname" required placeholder="Apellidos" />
                        </div>
                        <div className="texto">
                            <label htmlFor="username" className="form-label text-white mt-2">Nombre de Usuario</label>
                            <input type="text" className="form-control" onChange={e => handleChange(e)} name="username" required placeholder="Nombre de Usuario" />
                        </div>
                        <div className="texto">
                            <label htmlFor="email" className="form-label text-white mt-2">Correo Electronico</label>
                            <input type="email" className="form-control" onChange={e => handleChange(e)} name="email" required aria-describedby="emailHelp" placeholder="example@gmail.com" />
                        </div>
                        <div className="texto">
                            <label htmlFor="password" className="form-label text-white mt-2">Contraseña</label>
                            <input type="password" className="form-control" onChange={e => handleChange(e)} name="password" required placeholder="Example123"/>
                        </div>
                        <div className="texto">
                            <label htmlFor="confirmPassword" className="form-label text-white mt-2">Confirmar Contraseña</label>
                            <input type="password" className="form-control" onChange={e => handleChange(e)} name="confirmPassword" required placeholder="Example123"/>
                            {!password && <p style={{color: 'red'}}>Contraseña no coincide</p> }
                        </div>
                        <div className="texto">
                            <label htmlFor="birthday_date" className="form-label text-white mt-2">Fecha de Nacimiento</label>
                            <input type="date" className="form-control" onChange={e => handleChange(e)} name="birthday_date" required placeholder="01/01/1990" />
                        </div>
                        <div className="texto">
                            <label htmlFor="address" className="form-label text-white mt-2">Direccion</label>
                            <input type="text" className="form-control" onChange={e => handleChange(e)} name="address" required placeholder="Direccion" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input mt-3" name="terminos" required />
                                <label className="form-check-label text-white mt-3 texto" htmlFor="terminos" >Acepto Términos y condiciones</label>
                        </div>
                        <div className="toLogin" style={{marginBottom: '40px'}}>
                            <span className="text-white mt-4 texto">¿Ya estás registrado?</span>
                            <span ><Link to={'/login'}><span style={{color: 'rgb(102, 252, 241)', paddingLeft: '5px'}}>Inicia sesion</span></Link></span>
                        </div>
                        <button type="submit" className="btn button-submit mb-4 text-white texto">Continuar</button>
                    </form>
                </div>
            </div>
        </>
    )
}