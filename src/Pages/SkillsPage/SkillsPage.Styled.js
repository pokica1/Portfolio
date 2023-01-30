import styled from "styled-components/macro";
import { DeviceSizes } from "../../Components/Styled/DeviceSizes";

export const SkillsPageContainer = styled.div`
	text-align: center;
	max-width: 55%;
	margin-left: auto;
	margin-right: auto;
	${DeviceSizes.laptop} {
		max-width: 90%;
	}
	${DeviceSizes.tablet} {
		max-width: 90%;
	}
	${DeviceSizes.mobile} {
		max-width: 90%;
	}
`;

export const SkillsTitle = styled.h1`
	color: white;
	padding-top: 50px;
	margin-top: 0px;
	${DeviceSizes.laptop} {
		padding-bottom: 0;
	}
	${DeviceSizes.tablet} {
		padding-bottom: 0;
	}
	${DeviceSizes.mobile} {
		padding-bottom: 0;
	}
`;

export const SkillsCardContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 15px;
	justify-content: center;
	margin-bottom: 40px;
	${DeviceSizes.laptop} {
		flex-wrap: wrap;
	}
	${DeviceSizes.tablet} {
		flex-wrap: wrap;
	}
	${DeviceSizes.mobile} {
		flex-wrap: wrap;
	}
`;

export const EducationTitle = styled.h1`
	color: white;
	padding-top: 50px;
	box-shadow: 0 -8px 6px -6px white;
	${DeviceSizes.laptop} {
		margin-top: 25px;
		padding-bottom: 0;
	}
	${DeviceSizes.tablet} {
		padding-bottom: 0;
		margin-top: 25px;
	}
	${DeviceSizes.mobile} {
		padding-bottom: 0;
		margin-top: 25px;
	}
`;

export const EducationContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-bottom: 40px;
	${DeviceSizes.laptop} {
		padding-bottom: 20px;
	}
	${DeviceSizes.tablet} {
		flex-direction: column;
		padding-bottom: 20px;
	}
	${DeviceSizes.mobile} {
		flex-direction: column;
		padding-bottom: 20px;
	}
`;

export const UniLogo = styled.img`
	width: 120px;
	${DeviceSizes.laptop} {
		width: 100px;
	}
	${DeviceSizes.tablet} {
		width: 100px;
	}
	${DeviceSizes.mobile} {
		width: 100px;
	}
`;

export const EducationDescription = styled.div`
	font-size: 20px;
	color: white;
	margin-left: 15px;
	text-align: left;
	${DeviceSizes.laptop} {
		font-size: 20px;
	}
	${DeviceSizes.tablet} {
		font-size: 20px;
	}
	${DeviceSizes.mobile} {
		font-size: 20px;
	}
`;

export const ExperienceTitle = styled.h1`
	color: white;
	padding-top: 50px;
	box-shadow: 0 -8px 6px -6px white;
	${DeviceSizes.laptop} {
		padding-bottom: 0;
	}
	${DeviceSizes.tablet} {
		padding-bottom: 0;
	}
	${DeviceSizes.mobile} {
		padding-bottom: 0;
	}
`;

export const ExperienceContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: 20px;
	color: white;
	padding-bottom: 20px;
	${DeviceSizes.laptop} {
		flex-direction: row;
	}
	${DeviceSizes.tablet} {
		flex-direction: column;
		width: auto;
	}
	${DeviceSizes.mobile} {
		flex-direction: column;
		width: auto;
	}
`;

export const PerlegoLogo = styled.img`
	width: 120px;
	height: 120px;
	${DeviceSizes.laptop} {
		width: 80px;
		height: 80px;
		margin-bottom: 10px;
	}
	${DeviceSizes.tablet} {
		width: 80px;
		height: 80px;
		margin-bottom: 10px;
	}
	${DeviceSizes.mobile} {
		width: 80px;
		height: 80px;
		margin-bottom: 10px;
	}
`;

export const ExperienceDescriptionContainer = styled.div``;

export const ExperienceParagraph = styled.div`
	p,
	h3 {
		margin-top: 0px;
		margin-bottom: 20px;
		margin-right: 0px;
		margin-left: 20px;
		text-align: left;
		${DeviceSizes.laptop} {
			margin-left: 15px;
		}
		${DeviceSizes.tablet} {
			margin-left: 0;
		}
		${DeviceSizes.mobile} {
			margin-left: 0;
		}
	}
`;
