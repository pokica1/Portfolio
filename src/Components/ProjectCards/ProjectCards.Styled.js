import styled from "styled-components/macro";
import { DeviceSizes } from "../Styled/DeviceSizes";

export const ProjectCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	box-shadow: rgba(255, 255, 255, 0.25) 0px 54px 55px,
		rgba(255, 255, 255, 0.12) 0px -12px 30px,
		rgba(255, 255, 255, 0.12) 0px 4px 6px,
		rgba(255, 255, 255, 0.17) 0px 12px 13px,
		rgba(255, 255, 255, 0.09) 0px -3px 5px;
	border-radius: 20px;
	color: white;
	width: 300px;
	height: auto;
	padding: 20px;

	${DeviceSizes.mobile} {
		width: 300px;
		max-height: 600px;
	}
`;

export const ProjectImage = styled.img`
	width: 300px;
	height: auto;

	${DeviceSizes.mobile} {
		width: 200px;
		max-height: 300px;
	}
`;

export const ProjectTitle = styled.div`
	font-weight: bold;
	padding-bottom: 20px;
	font-size: 1.2em;
`;

export const projectDescription = styled.p`
	text-align: left;
`;

export const LinkContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

export const LinkText = styled.p`
	text-align: left;
`;
