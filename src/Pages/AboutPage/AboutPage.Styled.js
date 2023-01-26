import styled from "styled-components/macro";
import { DeviceSizes } from "../../Components/Styled/DeviceSizes";

export const PageTitle = styled.h1`
	color: white;
	padding-top: 50px;
	margin-top: 0px;
`;

export const ArticleContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 100px;
	padding-top: 100px;
	max-width: 55%;
	margin-left: auto;
	margin-right: auto;
	${DeviceSizes.laptop} {
		padding-top: 0;
		max-width: 90%;
		gap: 100px;
	}
	${DeviceSizes.tablet} {
		flex-direction: column;
		padding-top: 0;
		padding-left: 15px;
		padding-right: 15px;
		max-width: 90%;
		gap: 0;
	}
	${DeviceSizes.mobile} {
		flex-direction: column;
		gap: 0;
		padding-top: 0;
		padding-left: 15px;
		padding-right: 15px;
		max-width: 90%;
	}
`;

export const InfoContainer = styled.div`
	color: white;
	font-size: 20px;
	width: 50%;
	text-align: left;
	${DeviceSizes.laptop} {
		font-size: 20px;
	}
	${DeviceSizes.tablet} {
		font-size: 20px;
		width: auto;
		order: 1;
	}
	${DeviceSizes.mobile} {
		width: auto;
		font-size: 20px;
		order: 1;
		padding-bottom: 15px;
	}
`;
export const AboutParagraph = styled.div`
	margin-top: 0px;
	margin-bottom: 20px;
	p {
		margin-top: 0;
	}
`;

export const AboutImage = styled.img`
	width: 40%;
	height: 40%;
	${DeviceSizes.laptop} {
		height: 400px;
		width: 400px;
		align-self: center;
		padding-top: 0;
	}
	${DeviceSizes.tablet} {
		height: 400px;
		width: 400px;
		align-self: center;
		order: 0;
		padding-top: 0;
		margin-bottom: 20px;
	}
	${DeviceSizes.mobile} {
		height: 75%;
		width: 75%;
		align-self: center;
		order: 0;
		padding-top: 0;
		margin-bottom: 20px;
	}
`;
