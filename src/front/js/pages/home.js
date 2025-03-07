import "../../styles/home.css";
import React from "react";
import {Welcome} from '../component/welcome'
import {Onfire} from '../component/onfire'

import { HomeCatalog } from "../component/home-catalog";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { VistaIndividualPhone } from "./vistaIndividualPhone";
import { NovedadesMail } from "../component/novedadesMail";

export const Home = () => {
	return (
		<>


		<div  className="page-content pb-4" style={{backgroundColor: "rgb(47, 65, 79)"}}>
		<Welcome/>
		<div className="container">
		<Onfire/>
		<HomeCatalog/>
		<NovedadesMail/>
     	{/* <VistaIndividualPhone/> */}
		</div>
		</div>
		</>
	);
};
