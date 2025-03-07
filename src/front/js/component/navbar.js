import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { privateUser } from "../apiservices/callToApi";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [isVerified, setIsVerified] = useState(null)


	const checkout = async () =>{
		const verified = await privateUser()
		setIsVerified(verified)};

	useEffect(()=>{
		checkout();
	},[]);

	const logOut = () => {
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('idUser')
		window.location.reload();
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg"  style={store.navbar_visibility? { display: "block"} : {display: "none"}}>
				<div className="container">		
					<Link to={'/'}>
						<a className="navbar-brand" href="#">Navbar</a>
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="d-flex">
						<form className="d-flex" role="search">
							<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
						</form>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<Link to="/phones-catalog">
									<a className="nav-link" style={{ color: "white" }} aria-current="page" href="#">SMARTPHONES</a>
									</Link>
								</li>
								<li className="nav-item">
								<Link to="/tvs-catalog">
									<a className="nav-link" style={{ color: "white" }} aria-current="page" href="#">TVS</a>
									</Link>
								</li>
								<li className="nav-item">
								<Link to="/laptops-catalog">
									<a className="nav-link" style={{ color: "white" }} aria-current="page" href="#">LAPTOPS</a>
									</Link>
								</li>
								<li className="nav-item">
									<a className="nav-link" style={{ color: "white" }} href="#">Contact</a>
								</li>
								<li className="nav-item dropdown">
									<a className="nav-link dropbtn" style={{ color: "white" }} href="#"><i className="fa-solid fa-user"></i></a>
									{!isVerified ? 
										<div className="dropdown-content">
										<Link to={'/login'}><span>Login</span></Link>
										<Link to={'/signup'}><span>Sign Up</span></Link></div>
										: 
										<div className="dropdown-content">
										<Link to={'/personalzone'}><span>Zona Personal</span></Link>
										<Link to={'/'}><span onClick={logOut}>Cerrar Sesion</span></Link></div>
									}
								</li>
								<li className="nav-item">
									<a className="nav-link" style={{ color: "white" }} href="#"><i className="fa-solid fa-cart-shopping"></i></a>
								</li>

								{/* <li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										Dropdown
									</a>
									<ul className="dropdown-menu">
										<li><a className="dropdown-item" href="#">Action</a></li>
										<li><a className="dropdown-item" href="#">Another action</a></li>
										<li><hr className="dropdown-divider" /></li>
										<li><a className="dropdown-item" href="#">Something else here</a></li>
									</ul>
								</li> */}
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

