import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
	return (
		<>
			<NavBar />
			<div className="layout">{children}</div>
			<Footer />
		</>
	);
};
