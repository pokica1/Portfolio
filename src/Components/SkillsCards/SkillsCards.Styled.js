import styled from "styled-components/macro";
import { DeviceSizes } from "../Styled/DeviceSizes";

export const IconContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Image = styled.img`
	width: 100px;
	height: 100px;
	background-color: white;
	border-radius: 20px;
	padding: 10px;
	${DeviceSizes.laptop} {
		width: 70px;
		height: 70px;
		padding: 15px;
	}
`;

export const Title = styled.div`
	font-size: 20px;
	color: white;
	${DeviceSizes.laptop} {
		font-size: 1rem;
	}
`;
