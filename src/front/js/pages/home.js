import "../../styles/home.css";
import React from "react";
import {Welcome} from '../component/welcome'
import {Onfire} from '../component/onfire'

import { HomeCatalog } from "../component/home-catalog";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { LogIn } from "./logIn";
import { SignUp } from "./signUp";
import { VistaIndividualPhone } from "./vistaIndividualPhone";



export const Home = () => {
 const {actions} = useContext(Context)
	return (
		<>

		<div style={{backgroundColor: "rgb(47, 65, 79)"}}>
		<Welcome/>
		<Onfire/>
		<HomeCatalog/>
		<div className="page-content" style={{backgroundColor: "rgb(47, 65, 79)"}}>
		<Welcome/>
		{/*<Onfire/>*/}
		</div>
		</>
	);
};
