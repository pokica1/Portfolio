import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { DeviceSizes } from "../Styled/DeviceSizes";

export const Footer = styled.div`
	padding: 20px;
	background-color: #0055b7;
	text-align: center;
	font-size: 14px;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	box-shadow: 0 -8px 6px -6px white;
`;
export const ThirdPartyURL = styled.a`
	color: white;
	font-size: smaller;
	text-decoration: none;
`;

export const Navlink = styled(NavLink)`
	color: white;
	text-decoration: none;

	${DeviceSizes.laptop} {
		font-size: 14px;
	}
`;

export const ThirdPartyLinkContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 10px;

	${DeviceSizes.laptop} {
		margin-top: 10px;
		flex-direction: column;
		gap: 0;
	}
`;
