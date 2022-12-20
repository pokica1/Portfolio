import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export const Footer = (props) => (
	<div className="footer">
		<NavLink className="footerLink" to="/" id="footerURL">
			{" "}
			Orsolya Hubbarde
		</NavLink>
		<div className="thirdPartyLinkContainer">
			<a
				id="iconURL"
				href="https://www.flaticon.com/"
				title="Icons"
				target="_blank"
				rel="noreferrer"
			>
				Icons created by Freepik - Flaticon
			</a>
			<a
				id="illustrationURL"
				href="https://undraw.co/illustrations/"
				title="Illustrations"
				target="_blank"
				rel="noreferrer"
			>
				Illustrations created by Katerina Limpitsouni - unDraw
			</a>
		</div>
	</div>
);
