import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { privateUser } from "../apiservices/callToApi";


export const Navbar = () => {
	const { store } = useContext(Context);
	const [isVerified, setIsVerified] = useState(null);
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	let products = [];
	const phones = store.phones;
	const tvs = store.tvs;
	const laptops = store.laptops;
	products = phones.concat(laptops, tvs);

	console.log(products);
	
	const searcher = (e) => {
		setSearch(e.target.value);
	};

	let results = search.length > 0 && 
		products.filter(({ modelo = "", marca = "" }) => 
			modelo.toLowerCase().includes(search.toLowerCase()) || 
			marca.toLowerCase().includes(search.toLowerCase()));

	const checkout = async () => {
		const verified = await privateUser();
		setIsVerified(verified);
	};

	useEffect(() => {
		checkout();
	}, []);

	const logOut = () => {
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('idUser');
		window.location.reload();
	};

	return (
		<>
			<nav className={`navbar navbar-expand-lg  ${store.negative_colors ? "negative-navbar" : "positive-navbar"}`} style={store.navbar_visibility ? { display: "block" } : { display: "none" }}>
				<div className="container">
					<Link to={'/'}>
						<p className="navbar-brand" ><i className="fa-solid fa-user-astronaut fs-2 text-white "></i></p>
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="d-flex align-items-center">
						<form className="dropdown-search" role="search">
							<input className="form-control me-2 input-search" onChange={(e) => searcher(e)} type="search" placeholder="Buscar" aria-label="Search"></input>
							{search.length != 0 &&
								<div className="dropdown-content-search" style={{display: 'block'}}>
									{
										results.map((product, index)=>{
											return(
												<p key={index}>{product.marca} {product.modelo}</p>
											)
										})
									}
								</div>
							}
						</form>
						<div className="collapse navbar-collapse d-flex align-items-center" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<Link to="/phones-catalog">
										<p className="nav-link" style={{ color: "white" }} aria-current="page" >Móviles</p>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/tvs-catalog">
										<p className="nav-link" style={{ color: "white" }} aria-current="page" >Televisores</p>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/laptops-catalog">
										<p className="nav-link" style={{ color: "white" }} aria-current="page" >Pórtatiles</p>
									</Link>
								</li>
								<li className="nav-item">
									<p className="nav-link" style={{ color: "white" }} >Contacto</p>
								</li>
								<li className="nav-item dropdown">
									<a className="nav-link dropbtn" style={{ color: "white" }} ><i className="fa-solid fa-user"></i></a>
									{!isVerified ?
										<div className="dropdown-content">
											<Link to={'/login'}><span>Iniciar Sesion</span></Link>
											<Link to={'/signup'}><span>Crear Usuario</span></Link></div>
										:
										<div className="dropdown-content">
											<Link to={'/personalzone'}><span>Zona Personal</span></Link>
											<Link to={'/'}><span onClick={logOut}>Cerrar Sesion</span></Link></div>
									}
								</li>
								<li className="nav-item">
									<Link to="/cart">
										<a className="nav-link" style={{ color: "white" }} ><i className="fa-solid fa-cart-shopping"></i></a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

