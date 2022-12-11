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
			href="https://www.flaticon.com/free-icons/javascript"
			title="javascript icons"
			target="_blank"
			rel="noreferrer"
		>
			Javascript icons created by Freepik - Flaticon
		</a>
		<a
			href="https://www.flaticon.com/free-icons/html-5"
			title="html 5 icons"
			target="_blank"
			rel="noreferrer"
		>
			Html 5 icons created by Freepik - Flaticon
		</a>
		<a
			href="https://www.flaticon.com/free-icons/css-3"
			title="css 3 icons"
			target="_blank"
			rel="noreferrer"
		>
			Css 3 icons created by Freepik - Flaticon
		</a>
		<a
			href="https://www.kingston.ac.uk/"
			title="kingston uni logo"
			target="_blank"
			rel="noreferrer"
		>
			Kingston University logo from their website
		</a>
	</div>
);
