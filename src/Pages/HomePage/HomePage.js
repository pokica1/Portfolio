import React from "react";
import { PageContent } from "../../PageContent/PageContent";
import { NavLink } from "react-router-dom";
import { Button } from "../../Button/Button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./HomePage.css";

const HomePage = () => (
	<PageContent>
		<div className="homePage-container">
			<div className="articleContainer">
				<div className="article">
					Hi, <br /> I am Orsolya Hubbarde, <br /> an aspiring software engineer
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
				<NavLink to="/contact">
					<Button text="Contact" />
				</NavLink>
			</div>

			<div className="image">
				<img src="homePageImage.svg" alt="woman with a laptop" />
			</div>
		</div>
	</PageContent>
);

export default HomePage;
