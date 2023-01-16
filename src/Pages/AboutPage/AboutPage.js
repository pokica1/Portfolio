import { React } from "react";
import { PageContent } from "../../Components/PageContent/PageContent";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import useContentfulHook from "../../useContentfulHook.js";
import "./AboutPage.css";

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
			<h1>{data.aboutCollection.items[0].title}</h1>
			<div id="article-container">
				<div id="info">
					<div className="aboutParagraph">
						{documentToReactComponents(
							data.aboutCollection.items[0].aboutDescription.json
						)}
					</div>
				</div>
				<img
					id="aboutImage"
					src={data.aboutCollection.items[0].orsolya.url}
					alt={data.aboutCollection.items[0].orsolya.title}
				/>
			</div>
		</PageContent>
	);
}

export default AboutPage;
