import React from "react";

export const LogIn = () => {

    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100" style={{backgroundColor: "rgb(47, 65, 79)"}}>
                <div className="row md-col-12">
                    <h1 className="text-white titulo mt-3 text-center title-login">Log In</h1>
                    <form className="border border-light rounded-3 mb-5">
                        <div className="texto">
                            <label for="exampleInputEmail1" className="form-label text-white mt-4">Email or Username</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write your Email" />
                        </div>
                        <div className="texto">
                            <label for="exampleInputPassword1" className="form-label text-white mt-4">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Write your Password"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input mt-4" id="exampleCheck1" />
                                <label className="form-check-label text-white mt-4 texto" for="exampleCheck1">Remember me</label>
                                <p className="text-white mt-4 texto">You don't have an account? Sign up</p>
                        </div>
                        <button type="submit" className="btn button-submit mt-5 mb-4 text-white texto">Continue</button>
                    </form>
                </div>
            </div>
        </>
    )
}