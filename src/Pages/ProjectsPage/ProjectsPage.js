import React from "react";
import { PageContent } from "../../Components/PageContent/PageContent";
import ProjectCards from "../../Components/ProjectCards/ProjectCards.js";
import useContentfulHook from "../../useContentfulHook";
import * as S from "./ProjectsPage.Styled";

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
			<S.PageTitle>Projects</S.PageTitle>
			<S.ProjectPageContainer>
				<ProjectCards projectCards={data.projectCollection.items} />
			</S.ProjectPageContainer>
		</PageContent>
	);
}
export default ProjectsPage;
