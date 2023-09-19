import React from "react";
import useContentfulHook from "../../useContentfulHook.js";
import * as S from "./NotFoundPage.Styled";
import { PageContent } from "../../Components/PageContent/PageContent";
import { NavLink } from "react-router-dom";
import { Button } from "../../Components/Button/Button";

const query = `query {
	notFoundPageCollection{
	  items{
		pageTitle
		pageNotFoundImage{
			title	
		  	url
		}
	  }
	}
  }`;

function NotFoundPage() {
	let { data, errors } = useContentfulHook(query);

	if (errors) {
		return <div>{errors.map((error) => error.message).join(",")}</div>;
	}

	if (!data) {
		return <PageContent></PageContent>;
	}

	return (
		<PageContent>
			<S.NotFoundPageContainer>
				<S.PageNotFoundImage
					src={data.notFoundPageCollection.items[0].pageNotFoundImage.url}
					alt={data.notFoundPageCollection.items[0].pageNotFoundImage.title}
				/>
				<S.PageTitle data-testid="pageTitle">
					{data.notFoundPageCollection.items[0].pageTitle}
				</S.PageTitle>
				<NavLink to="/">
					<Button text="Back to Home" />
				</NavLink>
			</S.NotFoundPageContainer>
		</PageContent>
	);
}

export default NotFoundPage;
