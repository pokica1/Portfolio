import styled from "styled-components/macro";
import { DeviceSizes } from "../Styled/DeviceSizes";

export const Layout = styled.div`
	height: 100%;
	${DeviceSizes.mobile} {
		height: 100%;
	}
`;
