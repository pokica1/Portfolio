import React from "react";
import "./ProjectCards.css";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ projectCard }) {
	return (
		<div id="projectCard-container">
			<div id="projectTitle">{projectCard.title}</div>
			<div>
				<img
					id="projectImage"
					src={projectCard.image.url}
					alt={projectCard.image.title}
				/>
			</div>
			<p id="projectDescription">{projectCard.description}</p>
			<div id="link-container">
				<p id="linkText">Check out the GitHub link here:</p>
				<a href={projectCard.link} target="_blank" rel="noreferrer">
					<FaGithub color="white" size="50px" />
				</a>
			</div>
		</div>
	);
}

function ProjectCards({ projectCards }) {
	return (
		<>
			{projectCards.map((projectCard) => (
				<ProjectCard projectCard={projectCard} key={projectCard.sys.id} />
			))}
		</>
	);
}
export default ProjectCards;
