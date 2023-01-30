import React from "react";
import * as S from "./Button.Styled";

export const Button = (props) => (
	<S.Button data-cy="button-wrapper" id={props.id}>
		{props.text}
	</S.Button>
);
