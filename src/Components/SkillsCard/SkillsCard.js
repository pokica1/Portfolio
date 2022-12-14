import React from "react";
import "./SkillsCard.css";

export const SkillsCard = (props) => (
	<div className="icon-container">
		<div>
			<img className="image" src={props.src} alt={props.alt} />
		</div>
		<div className="title">{props.title}</div>
	</div>
);
