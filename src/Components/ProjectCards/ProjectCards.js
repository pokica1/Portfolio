import React from "react";
import * as S from "./ProjectCards.Styled";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ projectCard }) {
	return (
		<S.ProjectCardContainer>
			<S.ProjectTitle>{projectCard.title}</S.ProjectTitle>
			<div>
				<S.ProjectImage
					src={projectCard.image.url}
					alt={projectCard.image.title}
				/>
			</div>
			<S.projectDescription>{projectCard.description}</S.projectDescription>
			<S.LinkContainer>
				<S.LinkText>
					Check out the GitHub link here:{" "}
					<a href={projectCard.link} target="_blank" rel="noreferrer">
						<FaGithub color="white" size="30px" />
					</a>
				</S.LinkText>
			</S.LinkContainer>
		</S.ProjectCardContainer>
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
