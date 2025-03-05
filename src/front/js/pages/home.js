import "../../styles/home.css";
import React from "react";
import {Welcome} from '../component/welcome'
import {Onfire} from '../component/onfire'
import { LogIn } from "./logIn";
import { SignUp } from "./signUp";

export const Home = () => {

	return (
		<>
		<div className="page-content" style={{backgroundColor: "rgb(47, 65, 79)"}}>
		{/* <Welcome/> */}
		<Onfire/>
		</div>
		</>
	);
};
