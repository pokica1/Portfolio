import React from "react";
import * as S from "./SkillsCards.Styled";
// import "./SkillsCard.css";

function SkillsCard({ skillsCard }) {
	return (
		<S.IconContainer>
			<div>
				<S.Image
					src={skillsCard.skillCardImage.url}
					alt={skillsCard.skillCardImage.title}
				/>
			</div>
			<S.Title>{skillsCard.skillCardTitle}</S.Title>
		</S.IconContainer>
	);
}

function SkillsCards({ skillsCards }) {
	return (
		<>
			{skillsCards.map((skillsCard) => (
				<SkillsCard skillsCard={skillsCard} key={skillsCard.sys.id} />
			))}
		</>
	);
}

export default SkillsCards;
