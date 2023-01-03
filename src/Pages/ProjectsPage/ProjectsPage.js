import React from "react";
import { PageContent } from "../../Components/PageContent/PageContent";
import { ProjectCard } from "../../Components/ProjectCard/ProjectCard";
import "./ProjectsPage.css";

const ProjectsPage = () => (
	<PageContent>
		<div id="projectPage-container">
			<ProjectCard
				src="logo512.png"
				alt="React Native logo"
				projectTitle="Reading Diary with React Native"
				projectDescription="A small little app created with React Native. The app has vibrant colours as main target audiance is young children. Bla bla bla."
				projectLink="https://github.com/pokica1"
			/>
			<ProjectCard
				src="logo512.png"
				alt="React Native logo"
				projectTitle="Reading Diary with React Native"
				projectDescription="A small little app created with React Native. The app has vibrant colours as main target audiance is young children. Bla bla bla."
				projectLink="https://github.com/pokica1"
			/>
		</div>
	</PageContent>
);

export default ProjectsPage;
