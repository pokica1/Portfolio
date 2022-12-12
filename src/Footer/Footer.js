import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export const Footer = (props) => (
	<div className="footer">
		<NavLink className="footerLink" to="/" id="footerURL">
			{" "}
			Orsolya Hubbarde
		</NavLink>
		<a
			id="iconURL"
			href="https://www.flaticon.com/free-icons/javascript"
			title="Icons"
			target="_blank"
			rel="noreferrer"
		>
			Icons created by Freepik - Flaticon
		</a>
	</div>
);
