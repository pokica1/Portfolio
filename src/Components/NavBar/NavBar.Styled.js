import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { DeviceSizes } from "../Styled/DeviceSizes";

export const NavBarContainer = styled.nav`
	background-color: #0055b7;
	width: auto;
	height: 70px;
	margin-top: 0px;
	font-size: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const InnerContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;

	${DeviceSizes.mobile} {
		justify-content: space-around;
	}
`;

export const LeftLinksContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	${DeviceSizes.mobile} {
		display: none;
	}
`;

export const RightLinksContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	${DeviceSizes.mobile} {
		display: none;
	}
`;

export const HomeLinkContainer = styled.div`
	display: flex;
	align-items: center;
	padding-right: 20px;
	padding-left: 20px;
	font-size: 1.4em;
	${DeviceSizes.mobile} {
		font-size: 1em;
		padding-right: 0;
		padding-left: 0;
	}
`;

export const HamburgerButton = styled.button`
	display: none;
	${DeviceSizes.mobile} {
		display: contents;
		border: 0;
		color: white;
		cursor: pointer;
	}
`;

export const NavBarLink = styled(NavLink)`
	color: white;
	text-decoration: none;
	&.active::before {
		content: "<";
	}
	&.active::after {
		content: "/>";
	}
	${DeviceSizes.mobile} {
		display: flex;
		align-items: center;
	}
`;

export const ExtendedLink = styled(NavLink)`
	color: white;
	text-decoration: none;
	&.active::before {
		content: "<";
	}
	&.active::after {
		content: "/>";
	}
`;

export const NavBarExtendedContainer = styled.div`
	display: none;
	${DeviceSizes.mobile} {
		left: 0;
		width: 100%;
		margin-left: 0;
		margin-right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export const List = styled.ul`
	${DeviceSizes.mobile} {
		flex-direction: column;
		position: absolute;
		top: 60px;
		left: 0;
		width: 100%;
		height: 100%;
		margin-left: 0;
		margin-right: 0;
		background-color: #0055b7;
		padding-inline-start: 0;
		display: flex;
	}
`;

export const ListItem = styled.li`
	${DeviceSizes.mobile} {
		list-style-type: none;
		justify-content: center;
		margin: 20px;
	}
`;
