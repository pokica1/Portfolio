import React from "react";
import "./FormField.css";

export function FormField(props) {
	return (
		<>
			<label>{props.labelText}</label>
			<input
				className="inputField"
				type={props.type}
				name={props.name}
				required
			/>
		</>
	);
}
