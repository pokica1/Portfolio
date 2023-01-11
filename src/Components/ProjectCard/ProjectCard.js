import React from "react";
import "./ProjectCard.css";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = (props) => (
	<div id="projectCard-container">
		<div id="projectTitle">{props.projectTitle}</div>
		<div>
			<img id="projectImage" src={props.src} alt={props.alt} />
		</div>
		<p id="projectDescription">{props.projectDescription}</p>
		<div id="link-container">
			<p id="linkText">Check out the GitHub link here:</p>
			<a href={props.projectLink} target="_blank" rel="noreferrer">
				<FaGithub color="white" size="50px" />
			</a>
		</div>
	</div>
);
