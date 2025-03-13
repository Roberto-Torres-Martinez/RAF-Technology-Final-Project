import React, { useEffect, useState, useContext } from "react";
import { createUser, getUsers } from "../apiservices/callToApi";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUp = () => {
    const [newUser, setNewUser] = useState();
    const [password, setPassword] = useState(true);
    const [userList, setUserList] = useState([]);
    const [userExist, setUserExist] = useState(false);
    const navigate = useNavigate();    
    const {actions } = useContext(Context)
    
    const handleChange = (e) =>{
        setNewUser({...newUser, [e.target.name]: e.target.value});
    };
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(newUser){
            if (newUser.password != newUser.confirmPassword) {
                return
            }else{
                createUser(newUser, navigate);
            };
        };
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
                if (userList) {
                    if(userList.includes(newUser.email) || userList.includes(newUser.username)){
                        setUserExist(true);
                    }else{
                        setUserExist(false);
                    };
                }
            };
        };   
    },[newUser]);

    const usersApi = async () => {
        const users = await getUsers();
        users.forEach(user => {
            setUserList(prevList => [...prevList, user.username, user.email ])
        });
    };    

    useEffect(()=>{
        usersApi();
        actions.setPositiveColors()
        actions.setNoneNavbarVisibility()
    }, []);

        
    return (
        <>

            <div className="container-fluid d-flex justify-content-center align-items-center " style={{backgroundColor: "rgb(47, 65, 79)"}}>

                <div className="row md-col-12 form-signup">
                <div className="d-flex justify-content-center mt-5">
                    <Link to="/">
                        <i className="fa-solid fa-user-astronaut fs-2 text-white "></i>
                    </Link>
                        </div>
                    <h1 className="text-white titulo text-center title-signup">Crear Cuenta</h1>
                    <form className="border border-light rounded-3" onSubmit={e => handleSubmit(e)}>
                        {userExist && <p style={{color: 'red'}}>Ya existe una cuenta asociado a este email o usuario </p>} 
                        
                        
                        <div className="texto">
                            <label htmlFor="username" className="form-label text-white mt-2">Nombre de Usuario</label>
                            <input type="text" className="form-control" onChange={e => handleChange(e)} name="username" autoComplete="username" required placeholder="Nombre de Usuario" />
                        </div>
                        <div className="texto">
                            <label htmlFor="email" className="form-label text-white mt-2">Correo Electronico</label>
                            <input type="email" className="form-control" onChange={e => handleChange(e)} name="email" autoComplete="email" required aria-describedby="emailHelp" placeholder="example@gmail.com" />
                        </div>
                        <div className="texto">
                            <label htmlFor="password" className="form-label text-white mt-2">Contraseña</label>
                            <input type="password" className="form-control" onChange={e => handleChange(e)} name="password" autoComplete="new-password" required placeholder="Example123"/>
                        </div>
                        <div className="texto">
                            <label htmlFor="confirmPassword" className="form-label text-white mt-2">Confirmar Contraseña</label>
                            <input type="password" className="form-control" onChange={e => handleChange(e)} name="confirmPassword" autoComplete="new-password" required placeholder="Example123"/>
                            {!password && <p style={{color: 'red'}}>Contraseña no coincide</p> }
                        </div>
                        <div className="toLogin" style={{margin: '2em'}}>
                            <span className="text-white mt-4 texto">¿Ya estás registrado?</span>
                            <span ><Link to={'/login'}><span style={{color: 'rgb(102, 252, 241)', paddingLeft: '5px'}}>Iniciar sesion</span></Link></span>
                        </div>
                        <button type="submit" className="btn button-submit mb-4 text-white texto">Continuar</button>
                    </form>
                </div>
            </div>
        </>
    )
}