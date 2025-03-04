import "../../styles/home.css";
import React from "react";
import {Welcome} from '../component/welcome'
import {Onfire} from '../component/onfire'
import { SignUp } from "./signUp";
import { LogIn } from "./logIn";

export const Home = () => {

	return (
		<>
		<div style={{backgroundColor: "rgb(47, 65, 79)"}}>
		{/* <Welcome/> */}
			<Onfire/>
		</div>
		</>
	);
};
