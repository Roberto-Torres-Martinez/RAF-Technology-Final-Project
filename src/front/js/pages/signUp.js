import React from "react";

export const SignUp = () => {

    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
                <div className="row md-col-12 form-signup">
                    <h1 className="text-white titulo text-center title-signup">Create Account</h1>
                    <form className="border border-light rounded-3">
                        <div className="texto">
                            <label for="inputName" className="form-label text-white mt-2">Name</label>
                            <input type="text" className="form-control" id="inputName" placeholder="Write your name" />
                        </div>
                        <div className="texto">
                            <label for="inputLastName" className="form-label text-white mt-2">Last Name</label>
                            <input type="text" className="form-control" id="inputLastName" placeholder="Write your last name" />
                        </div>
                        <div className="texto">
                            <label for="inputUsername" className="form-label text-white mt-2">Username</label>
                            <input type="text" className="form-control" id="inputUsername" placeholder="Write your username" />
                        </div>
                        <div className="texto">
                            <label for="exampleInputEmail1" className="form-label text-white mt-2">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write your Email" />
                        </div>
                        <div className="texto">
                            <label for="exampleInputPassword1" className="form-label text-white mt-2">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Write your Password"/>
                        </div>
                        <div className="texto">
                            <label for="inputConfirmPassword" className="form-label text-white mt-2">Confirm Password</label>
                            <input type="password" className="form-control" id="inputConfirmPassword" placeholder="Confirm Password"/>
                        </div>
                        <div className="texto">
                            <label for="inputBirthday" className="form-label text-white mt-2">Birthday Date</label>
                            <input type="text" className="form-control" id="inputBirthday" placeholder="Write your Birthday Date" />
                        </div>
                        <div className="texto">
                            <label for="inputAddress" className="form-label text-white mt-2">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Write your Address" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input mt-3" id="exampleCheck1" />
                                <label className="form-check-label text-white mt-3 texto" for="exampleCheck1">I accept the terms and conditions</label>
                                <p className="text-white mt-4 texto">Are you already registered? Login</p>
                        </div>
                        <button type="submit" className="btn button-submit mb-4 text-white texto">Continue</button>
                    </form>
                </div>
            </div>
        </>
    )
}