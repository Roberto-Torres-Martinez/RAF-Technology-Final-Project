import "../../styles/home.css";
import React, { useEffect, useState } from "react";
import {Welcome} from '../component/welcome'
import {Onfire} from '../component/onfire'

import { HomeCatalog } from "../component/home-catalog";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { NovedadesMail } from "../component/novedadesMail";

import { WelcomeModal } from "../component/welcome-modal";
import Swal from 'sweetalert2';
import { privateUser } from "../apiservices/callToApi";


export const Home = () => {

const [response, setResponse] = useState(null)

const checkoutUser = async () => {
	const verified = await privateUser()
	setResponse(verified)
}

	
if(response){
	Swal.fire({
		title: "Bienvenido!",
		text: "A partir de ahora estas dentro del equipo rocket",
		icon: "success",
		imageUrl: "https://media0.giphy.com/media/uzWoRrlxnbL6TJgIbP/giphy.gif?cid=6c09b952p0cq28z0rgmkvl41gkn11yj4231dug2es15s9g0r&ep=v1_gifs_search&rid=giphy.gif&ct=g",
		draggable: true
		 });
		}
	

	return (
		<>

		<div  className="page-content" style={{backgroundColor: "rgb(47, 65, 79)"}}>
		<Welcome/>
		<div className="container mx-auto py-4">	
		<Onfire/>
		<HomeCatalog/>
		<NovedadesMail/>
		</div>
     	{/* <VistaIndividualPhone/> */}
		</div>
		</>
	);
};
