import React from "react";
import { StyledButton } from "./Button.Styled";
import "./Button.css";

export const Button = (props) => (
	<StyledButton data-cy="button-wrapper" id={props.id}>
		{props.text}
	</StyledButton>
);
