import React from "react";
import * as S from "./Button.Styled";
import "./Button.css";

export const Button = (props) => (
	<S.Button data-cy="button-wrapper" id={props.id}>
		{props.text}
	</S.Button>
);
