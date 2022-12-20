import React from "react";
import { PageContent } from "../../PageContent/PageContent";
import { NavLink } from "react-router-dom";
import { Button } from "../../Button/Button";
import "./NotFoundPage.css";

const NotFoundPage = () => (
	<PageContent>
		<div id="NotFoundPageContainer">
			<img
				id="PageNotFoundImage"
				src="404Image.svg"
				alt="little creatures eating from the donut tree"
			/>
			<h1>Oops, page not found</h1>
			<NavLink to="/">
				<Button text="Back to Home" />
			</NavLink>
		</div>
	</PageContent>
);

export default NotFoundPage;
