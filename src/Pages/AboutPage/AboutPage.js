import { React, useState, useEffect } from "react";
import { PageContent } from "../../Components/PageContent/PageContent";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
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
	const [page, setPage] = useState(null);

	useEffect(() => {
		window
			.fetch(
				//read only public key:
				`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_YOUR_SPACE_ID}/`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						//read only public key:
						Authorization: `Bearer ${process.env.REACT_APP_YOUR_ACCESS_TOKEN}`,
					},
					body: JSON.stringify({ query }),
				}
			)
			.then((response) => response.json())
			.then(({ data, errors }) => {
				if (errors) {
					console.error(errors);
				}
				setPage(data.aboutCollection.items[0]);
			});
	}, []);

	if (!page) {
		return "Loading...";
	}

	return (
		<PageContent>
			<h1>{page.title}</h1>
			<div id="article-container">
				<div id="info">
					<div className="aboutParagraph">
						{documentToReactComponents(page.aboutDescription.json)}
					</div>
				</div>
				<img id="aboutImage" src={page.orsolya.url} alt={page.orsolya.title} />
			</div>
		</PageContent>
	);
}

export default AboutPage;
