import React from "react";
import { PageContent } from "../../Components/PageContent/PageContent";
import ProjectCards from "../../Components/ProjectCards/ProjectCards.js";
import useContentfulHook from "../../useContentfulHook";
import "./ProjectsPage.css";

const query = `query {
	projectCollection {
	  items {
		sys {
			id
		}
		title
		image {
		  url
		  title
		}
		description
		link
	  }
	}
  }`;

function ProjectsPage() {
	let { data, errors } = useContentfulHook(query);

	if (errors) {
		return <div>{errors.map((error) => error.message).join(",")}</div>;
	}

	if (!data) {
		return "Loading...";
	}

	return (
		<PageContent>
			<h1 id="projectPageTitle">Projects</h1>
			<div id="projectPage-container">
				<ProjectCards projectCards={data.projectCollection.items} />
				{/* {projects?.map((project) => (
					<ProjectCard
						key={project.sys.id}
						src={project.image.url}
						alt={project.image.title}
						projectTitle={project.title}
						projectLink={project.link}
					/>
				))} */}
				{/* <ProjectCard
					src="moduleAllocationToolJava.PNG"
					alt="Java module allocation tool window"
					projectTitle="Java module allocation tool"
					projectDescription="This module allocation tool has been created with Java. The tool can be used to allocate tasks and subtask to a user."
					projectLink="https://github.com/pokica1/DutyAllocationToolJava"
				/>
				<ProjectCard
					src="ReadingDiaryReactNative.PNG"
					alt="Reading Diary App"
					projectTitle="Reading Diary created with React Native"
					projectDescription="This app has created to help teachers, parents and students to keep top on the reading requirements."
					projectLink="https://github.com/pokica1/ReactNativeAssignment"
				/>
				<ProjectCard
					src="HangmanGameSwift.PNG"
					alt="Hangman Game App"
					projectTitle="Hangman Game created with SwiftUI"
					projectDescription="This a simple hangman game that was created with SwiftUI."
					projectLink="https://github.com/pokica1/HangmanGameSwiftUI"
				/>
				<ProjectCard
					src="HighestCardGameSwift.PNG"
					alt="Highest Card Game App"
					projectTitle="Highest Card Game App created with Swift"
					projectDescription="An app that you can play a card game against the computer. The user that has the highest value card wins the round."
					projectLink="https://github.com/pokica1/HighestCardGameSwift"
				/> */}
			</div>
		</PageContent>
	);
}
export default ProjectsPage;
