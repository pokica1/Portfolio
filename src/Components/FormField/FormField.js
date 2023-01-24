import React from "react";
import * as S from "./FormField.Styled";

export function FormField(props) {
	return (
		<>
			<S.Label>{props.labelText}</S.Label>
			<S.InputField type={props.type} name={props.name} required />
		</>
	);
}
