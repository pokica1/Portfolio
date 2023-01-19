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
			</div>
		</PageContent>
	);
}
export default ProjectsPage;
