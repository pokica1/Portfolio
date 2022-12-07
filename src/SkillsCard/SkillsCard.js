import React from "react";
import "./SkillsCard.css";

export const SkillsCard = (props) => (
	<div className="icon-container">
		<div>
			<img id="image" src={props.src} alt={props.alt} width="60px" />
		</div>
		<div className="title">{props.title}</div>
	</div>
);
