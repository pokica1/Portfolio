import React from "react";
import { StyledInputField, StyledLabel } from "./FormField.Styled";

export function FormField(props) {
	return (
		<>
			<StyledLabel>{props.labelText}</StyledLabel>
			<StyledInputField type={props.type} name={props.name} required />
		</>
	);
}
