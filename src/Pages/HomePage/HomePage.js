import React from "react";
import { PageContent } from "../../Components/PageContent/PageContent";
import { NavLink } from "react-router-dom";
import { Button } from "../../Components/Button/Button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./HomePage.css";

const HomePage = () => (
	<PageContent>
		<div className="homePage-container">
			<div className="articleContainer">
				<div className="article">
					<p className="homeParagraph">Hi,</p>
					<p className="homeParagraph">I am Orsolya Hubbarde,</p>
					<p className="homeParagraph">an aspiring software engineer</p>
				</div>
				<div className="logoContainer">
					<a
						href="https://www.linkedin.com/in/orsolya-hubbarde/"
						target="_blank"
						rel="noreferrer"
					>
						<FaLinkedin color="white" size="50px" />
					</a>
					<a href="https://github.com/pokica1" target="_blank" rel="noreferrer">
						<FaGithub color="white" size="50px" />
					</a>
				</div>
				<NavLink id="homeContactButton" to="/contact">
					<Button text="Contact" />
				</NavLink>
			</div>
			<img id="homeImage" src="homePageImage.svg" alt="woman with a laptop" />
		</div>
	</PageContent>
);

export default HomePage;
