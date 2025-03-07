import React, { useEffect, useState } from "react";
import { createUser } from "../apiservices/callToApi";

export const SignUp = () => {
    const [newUser, setNewUser] = useState();
    const [password, setPassword] = useState(true)

    console.log(newUser);
    

    const handleChange = (e) =>{
        setNewUser({...newUser, [e.target.name]: e.target.value});
    };
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        createUser(newUser);
    };

    useEffect(()=>{
        if (newUser){
            if (newUser.password && newUser.confirmPassword){
                    if(newUser.password != newUser.confirmPassword){
                        setPassword(false);
                    }else{
                        setPassword(true);
                    };
                };  
            };
    },[newUser]);

    const handleTerminos = (e) => {
        console.log(e.checked);
    }


    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100 " style={{backgroundColor: "rgb(47, 65, 79)"}}>
                <div className="row md-col-12 form-signup">
                    <h1 className="text-white titulo text-center title-signup">Create Account</h1>
                    <form className="border border-light rounded-3" onSubmit={e => handleSubmit(e)}>
                        <div className="texto">
                            <label htmlFor="name" className="form-label text-white mt-2">Name</label>
                            <input type="text" className="form-control" onChange={e => handleChange(e)} name="name" required placeholder="Write your name" />
                        </div>
                        <div className="texto">
                            <label htmlFor="lastname" className="form-label text-white mt-2">Last Name</label>
                            <input type="text" className="form-control" onChange={e => handleChange(e)} name="lastname" required placeholder="Write your last name" />
                        </div>
                        <div className="texto">
                            <label htmlFor="username" className="form-label text-white mt-2">Username</label>
                            <input type="text" className="form-control" onChange={e => handleChange(e)} name="username" required placeholder="Write your username" />
                        </div>
                        <div className="texto">
                            <label htmlFor="email" className="form-label text-white mt-2">Email</label>
                            <input type="email" className="form-control" onChange={e => handleChange(e)} name="email" required aria-describedby="emailHelp" placeholder="Write your Email" />
                        </div>
                        <div className="texto">
                            <label htmlFor="password" className="form-label text-white mt-2">Password</label>
                            <input type="password" className="form-control" onChange={e => handleChange(e)} name="password" required placeholder="Write your Password"/>
                        </div>
                        <div className="texto">
                            <label htmlFor="confirmPassword" className="form-label text-white mt-2">Confirm Password</label>
                            <input type="password" className="form-control" onChange={e => handleChange(e)} name="confirmPassword" required placeholder="Confirm Password"/>
                            {!password && <p style={{color: 'red'}}>Password no coincide</p> }
                        </div>
                        <div className="texto">
                            <label htmlFor="birthday_date" className="form-label text-white mt-2">Birthday Date</label>
                            <input type="text" className="form-control" onChange={e => handleChange(e)} name="birthday_date" required placeholder="Write your Birthday Date" />
                        </div>
                        <div className="texto">
                            <label htmlFor="address" className="form-label text-white mt-2">Address</label>
                            <input type="text" className="form-control" onChange={e => handleChange(e)} name="address" required placeholder="Write your Address" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input mt-3" onChange={e => handleTerminos(e)} name="terminos" required />
                                <label className="form-check-label text-white mt-3 texto" htmlFor="terminos" >I accept the terms and conditions</label>
                                <p className="text-white mt-4 texto">Are you already registered? Login</p>
                        </div>
                        <button type="submit" className="btn button-submit mb-4 text-white texto">Continue</button>
                    </form>
                </div>
            </div>
        </>
    )
}