import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import * as S from "./NavBar.Styled";

export default function NavBar() {
	const [isNavBarExpanded, setIsNavBarExpanded] = useState(false);

	return (
		<S.NavBarContainer isNavBarExpanded={isNavBarExpanded}>
			<S.InnerContainer>
				<S.LeftLinksContainer>
					<S.NavBarLink to="/about">About</S.NavBarLink>
					<S.NavBarLink to="/skills">Skills</S.NavBarLink>
				</S.LeftLinksContainer>
				<S.HomeLinkContainer>
					<S.NavBarLink to="/">Orsolya Hubbarde</S.NavBarLink>
				</S.HomeLinkContainer>
				<S.RightLinksContainer>
					<S.NavBarLink to="/projects">Projects</S.NavBarLink>
					<S.NavBarLink to="/contact">Contact</S.NavBarLink>
				</S.RightLinksContainer>
				<S.HamburgerButton
					id="hamburger"
					onClick={() => {
						setIsNavBarExpanded(!isNavBarExpanded);
					}}
				>
					<GiHamburgerMenu size="50px" />
				</S.HamburgerButton>
			</S.InnerContainer>
			{isNavBarExpanded && (
				<S.NavBarExtendedContainer>
					<S.List>
						<S.ListItem>
							<S.ExtendedLink
								onClick={() => {
									setIsNavBarExpanded(!isNavBarExpanded);
								}}
								to="/about"
							>
								About
							</S.ExtendedLink>
						</S.ListItem>
						<S.ListItem>
							<S.ExtendedLink
								onClick={() => {
									setIsNavBarExpanded(!isNavBarExpanded);
								}}
								to="/skills"
							>
								Skills
							</S.ExtendedLink>
						</S.ListItem>
						<S.ListItem>
							<S.ExtendedLink
								onClick={() => {
									setIsNavBarExpanded(!isNavBarExpanded);
								}}
								to="/projects"
							>
								Projects
							</S.ExtendedLink>
						</S.ListItem>
						<S.ListItem>
							<S.ExtendedLink
								onClick={() => {
									setIsNavBarExpanded(!isNavBarExpanded);
								}}
								to="/contact"
							>
								Contact
							</S.ExtendedLink>
						</S.ListItem>
					</S.List>
				</S.NavBarExtendedContainer>
			)}
		</S.NavBarContainer>
	);
	// 	<nav>
	// 		<div className="mobileNav">
	// 			<NavLink className="homeMobile" to="/">
	// 				Orsolya Hubbarde
	// 			</NavLink>
	// 		</div>
	// 		<div className={isNavBarExpanded ? "navMenu expanded" : "navMenu"}>
	// 			<ul>
	// 				<li>
	// 					<NavLink
	// 						to="/about"
	// 						onClick={() => {
	// 							setIsNavBarExpanded(!isNavBarExpanded);
	// 						}}
	// 					>
	// 						About
	// 					</NavLink>
	// 				</li>
	// 				<li>
	// 					<NavLink
	// 						id="skillsLink"
	// 						to="/skills"
	// 						onClick={() => {
	// 							setIsNavBarExpanded(!isNavBarExpanded);
	// 						}}
	// 					>
	// 						Skills
	// 					</NavLink>
	// 				</li>
	// 				<li>
	// 					<NavLink className="home" to="/">
	// 						Orsolya Hubbarde
	// 					</NavLink>
	// 				</li>
	// 				<li>
	// 					<NavLink
	// 						id="projectsLink"
	// 						to="/Projects"
	// 						onClick={() => {
	// 							setIsNavBarExpanded(!isNavBarExpanded);
	// 						}}
	// 					>
	// 						Projects
	// 					</NavLink>
	// 				</li>
	// 				<li>
	// 					<NavLink
	// 						id="contactLink"
	// 						to="/contact"
	// 						onClick={() => {
	// 							setIsNavBarExpanded(!isNavBarExpanded);
	// 						}}
	// 					>
	// 						Contact
	// 					</NavLink>
	// 				</li>
	// 			</ul>
	// 		</div>
	// 		<div className="mobileNav">
	// 			<button
	// 				className="hamburger"
	// 				onClick={() => {
	// 					setIsNavBarExpanded(!isNavBarExpanded);
	// 				}}
	// 			>
	// 				<GiHamburgerMenu size="50px" color="white" />
	// 			</button>
	// 		</div>
	// 	</nav>
	// );
}
