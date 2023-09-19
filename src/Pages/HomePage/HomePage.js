import React from "react";
import useContentfulHook from "../../useContentfulHook.js";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { PageContent } from "../../Components/PageContent/PageContent";
import * as S from "./HomePage.Styled";
import { Button } from "../../Components/Button/Button";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const query = `query {
	homeCollection{
	  items{
		homeDescription {
			json
		}
		homeImage{
			title	
		  	url
		}
	  }
	}
  }`;

function HomePage() {
	let { data, errors } = useContentfulHook(query);

	if (errors) {
		return <div>{errors.map((error) => error.message).join(",")}</div>;
	}

	if (!data) {
		return <PageContent></PageContent>;
	}

	return (
		<PageContent>
			<S.HomePageContainer>
				<S.ArticleContainer>
					<S.HomeArticle data-testid="article">
						{documentToReactComponents(
							data.homeCollection.items[0].homeDescription.json
						)}
					</S.HomeArticle>
					<S.LogoContainer>
						<a
							href="https://www.linkedin.com/in/orsolya-hubbarde/"
							target="_blank"
							rel="noreferrer"
						>
							<FaLinkedin color="white" size="50px" />
						</a>
						<a
							href="https://github.com/pokica1"
							target="_blank"
							rel="noreferrer"
						>
							<FaGithub color="white" size="50px" />
						</a>
					</S.LogoContainer>
					<S.NavLinkHome data-testid="homeContactButton" to="/contact">
						<Button text="Contact" />
					</S.NavLinkHome>
				</S.ArticleContainer>
				<S.HomeImage
					src={data.homeCollection.items[0].homeImage.url}
					alt={data.homeCollection.items[0].homeImage.title}
				/>
			</S.HomePageContainer>
		</PageContent>
	);
}

export default HomePage;
