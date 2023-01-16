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
		aboutParagraph1
		aboutParagraph2
		aboutParagraph3
		aboutParagraph4
		aboutParagraph5
		aboutParagraph6
		orsolya{
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
					<p className="aboutParagraph">
						{documentToReactComponents(page.aboutDescription.json)}
					</p>
					{/* <p className="aboutParagraph">{page.aboutParagraph1}</p>
					<p className="aboutParagraph">{page.aboutParagraph2}</p>
					<p className="aboutParagraph">{page.aboutParagraph3}</p>
					<p className="aboutParagraph">{page.aboutParagraph4}</p>
					<p className="aboutParagraph">{page.aboutParagraph5}</p>
					<p className="aboutParagraph">{page.aboutParagraph6}</p> */}
				</div>
				<img id="aboutImage" src={page.orsolya.url} alt="Orsolya smiling" />
			</div>
		</PageContent>
	);
}

export default AboutPage;
