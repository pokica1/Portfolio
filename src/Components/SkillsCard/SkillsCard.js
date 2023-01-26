import React from "react";
import * as S from "./SkillsCard.Styled";
// import "./SkillsCard.css";

export const SkillsCard = (props) => (
	<S.IconContainer>
		<div>
			<S.Image src={props.src} alt={props.alt} />
		</div>
		<S.Title>{props.title}</S.Title>
	</S.IconContainer>
);
