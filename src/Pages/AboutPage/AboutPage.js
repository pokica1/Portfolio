import React from "react";
import { PageContent } from "../../PageContent/PageContent";
import "./AboutPage.css";

const AboutPage = () => (
	<PageContent>
		<h1>About me</h1>
		<div id="article-container">
			<div id="info">
				<p>
					I recently obtained a first-class degree in BSc Computer Science from
					Kingston University.
				</p>
				<p>
					My final year project focused on creating a website for a client.
					Throughout the project I have created the front end using, HTML, CSS,
					JavaScript and React. I utilised AWS Amplify to help build out the
					back end and connect it to the front end. A relational database has
					been used to store data and used GraphQL to manage fetching it.
				</p>
				<p>
					During my university years, I have focused on learning mobile app
					development, databases, UX/UI and programming mainly in Java.
				</p>
				<p>
					Also, I became an academic mentor to help students understand the
					university material and help them with their workshops. I have worked
					as a QA engineer intern and I have some experience with automation
					testing using Cypress and some manual testing.
				</p>
				<p>
					In my free time, I enjoy going on walks with my two golden retrievers,
					baking desserts and snowboarding in the winter.
				</p>
			</div>
			<img id="aboutImage" src="profilePicLinkedin.jpg" alt="Orsolya smiling" />
		</div>
	</PageContent>
);

export default AboutPage;
