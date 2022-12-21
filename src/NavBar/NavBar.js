import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
	const [isNavBarExpanded, setIsNavBarExpanded] = useState(false);

	return (
		<nav>
			<div className="mobileNav">
				<NavLink className="homeMobile" to="/">
					Orsolya Hubbarde
				</NavLink>
			</div>
			<div className={isNavBarExpanded ? "navMenu expanded" : "navMenu"}>
				<ul>
					<li>
						<NavLink
							to="/about"
							onClick={() => {
								setIsNavBarExpanded(!isNavBarExpanded);
							}}
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/skills"
							onClick={() => {
								setIsNavBarExpanded(!isNavBarExpanded);
							}}
						>
							Skills
						</NavLink>
					</li>
					<li>
						<NavLink className="home" to="/">
							Orsolya Hubbarde
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/Blog"
							onClick={() => {
								setIsNavBarExpanded(!isNavBarExpanded);
							}}
						>
							Blog
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							onClick={() => {
								setIsNavBarExpanded(!isNavBarExpanded);
							}}
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="mobileNav">
				<button
					className="hamburger"
					onClick={() => {
						setIsNavBarExpanded(!isNavBarExpanded);
					}}
				>
					<GiHamburgerMenu size="50px" color="white" />
				</button>
			</div>
		</nav>
	);
}
