import React, { Component } from "react";

export const Footer = () => (
	<>
	<div className="container-fluid" style={{ backgroundColor: "rgb(56, 148, 163)" }}>
		<div className="row pb-5 pt-3">
			<div className="col-3">
				<h5><i className="fa-solid fa-user-astronaut "></i></h5>
				<ul className="ps-0">
					<li className="ms-5 my-3"><i className="fa-brands fa-instagram"></i></li>
					
				</ul>
			</div>
			<div className="col-3">
			<h5>Contacta con nosotros</h5>
			<ul className="ps-0">
					<li className="mt-3 mb-2"><i className="fa-solid fa-phone"></i> +34 665 885 885</li>
					<li className="mt-1 mb-3"><i className="fa-regular fa-envelope"></i> raf@org.com</li>
				</ul>
			</div>
			<div className="col-3">
			<h5>Guía de compra</h5>
			<ul className="ps-0">
					<li className=" mt-3 mb-1">Crear usuario</li>
					<li className="my-2">Pago</li>
					<li className="mt-1 mb-3">Envío</li>
				</ul>
			</div>
			<div className="col-3">
			<h5>Pagar con</h5>
			<ul className="ps-0">
				<li className="mt-3 mb-2"><i className="fa-brands fa-cc-visa"></i></li>
				<li className="mt-1 mb-3"><i className="fa-brands fa-cc-mastercard"></i></li>
			</ul>
			</div>
		</div>
	</div>
	</>
);
