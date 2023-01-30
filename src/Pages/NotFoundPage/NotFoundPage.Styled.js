import styled from "styled-components/macro";
import { DeviceSizes } from "../../Components/Styled/DeviceSizes";

export const NotFoundPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const PageNotFoundImage = styled.img`
	width: 50%;
	height: 50%;
	margin-top: 50px;
	${DeviceSizes.laptop} {
		margin-top: 100px;
	}
`;

export const PageTitle = styled.h1`
	color: white;
	padding-top: 50px;
	margin-top: 0px;
`;
