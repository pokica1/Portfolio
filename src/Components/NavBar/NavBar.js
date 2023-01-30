import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import * as S from "./NavBar.Styled";

export default function NavBar() {
	const [isNavBarExpanded, setIsNavBarExpanded] = useState(false);

	return (
		<S.NavBarContainer isNavBarExpanded={isNavBarExpanded}>
			<S.InnerContainer>
				<S.LeftLinksContainer>
					<S.NavBarLink to="/about">About</S.NavBarLink>
					<S.NavBarLink data-cy="skillsLink" to="/skills">
						Skills
					</S.NavBarLink>
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
								data-cy="skillsLink"
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
}
