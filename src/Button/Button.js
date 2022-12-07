import React from "react";
import "./Button.css";

export const Button = (props) => (
	<div className="button-wrapper" id={props.id}>
		{props.text}
	</div>
);
