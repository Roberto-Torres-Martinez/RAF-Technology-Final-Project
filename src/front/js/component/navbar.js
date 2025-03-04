import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgb(56, 148, 163)" }}>
				<div className="container-fluid">
					<a className="navbar-brand" href="#">Navbar</a>
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
									<a className="nav-link" style={{color: "white"}}  aria-current="page" href="#">SMARTPHONES</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" style={{color: "white"}}  aria-current="page" href="#">TVS</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" style={{color: "white"}}  aria-current="page" href="#">LAPTOPS</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" style={{color: "white"}}  href="#">Contact</a>
								</li> 
								<li className="nav-item">
									<a className="nav-link" style={{color: "white"}} href="#"><i className="fa-solid fa-user"></i></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" style={{color: "white"}}  href="#"><i className="fa-solid fa-cart-shopping"></i></a>
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
