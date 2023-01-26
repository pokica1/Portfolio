import styled from "styled-components/macro";
import { DeviceSizes } from "../../Components/Styled/DeviceSizes";

export const PageTitle = styled.h1`
	color: white;
	padding-top: 50px;
	margin-top: 0px;
`;

export const ProjectPageContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: center;
	max-width: 55%;
	margin-left: auto;
	margin-right: auto;
	padding-top: 100px;
	padding-bottom: 50px;
	${DeviceSizes.laptop} {
		align-items: center;
		padding-bottom: 20px;
		max-width: 90%;
		padding-top: 20px;
	}
	${DeviceSizes.tablet} {
		flex-direction: column;
		align-items: center;
		padding-bottom: 20px;
		max-width: 90%;
		padding-top: 20px;
	}
	${DeviceSizes.mobile} {
		flex-direction: column;
		align-items: center;
		padding-bottom: 20px;
		max-width: 90%;
		padding-top: 20px;
	}
`;
