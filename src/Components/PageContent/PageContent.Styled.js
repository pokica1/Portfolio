import styled from "styled-components";
import { DeviceSizes } from "../Styled/DeviceSizes";

export const StyledPageContent = styled.div`
	min-height: 950px;
	background-color: #0055b7;
	box-shadow: 0 -8px 6px -6px white;

	${DeviceSizes.mobile} {
		min-height: 500px;
	}
`;
