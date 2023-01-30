import { React } from "react";
import { PageContent } from "../../Components/PageContent/PageContent";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import useContentfulHook from "../../useContentfulHook.js";
import * as S from "./AboutPage.Styled";

const query = `query {
	aboutCollection{
	  items{
		title
		aboutDescription {
			json
		}
		orsolya{
			title	
		  	url
		}
	  }
	}
  }`;

function AboutPage() {
	let { data, errors } = useContentfulHook(query);

	if (errors) {
		return <div>{errors.map((error) => error.message).join(",")}</div>;
	}

	if (!data) {
		return "Loading...";
	}

	return (
		<PageContent>
			<S.PageTitle>{data.aboutCollection.items[0].title}</S.PageTitle>
			<S.ArticleContainer>
				<S.InfoContainer>
					<S.AboutParagraph>
						{documentToReactComponents(
							data.aboutCollection.items[0].aboutDescription.json
						)}
					</S.AboutParagraph>
				</S.InfoContainer>
				<S.AboutImage
					src={data.aboutCollection.items[0].orsolya.url}
					alt={data.aboutCollection.items[0].orsolya.title}
				/>
			</S.ArticleContainer>
		</PageContent>
	);
}

export default AboutPage;
