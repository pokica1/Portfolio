import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { DeviceSizes } from "../../Components/Styled/DeviceSizes";

export const ArticleContainer = styled.div`
	${DeviceSizes.tablet} {
		display: flex;
		flex-direction: column;
		text-align: center;
	}
	${DeviceSizes.mobile} {
		display: flex;
		flex-direction: column;
	}
`;

export const HomeArticle = styled.div`
	font-size: 50px;
	color: white;
	text-align: left;
	margin-bottom: 20px;
	p {
		margin: 0;
	}
	${DeviceSizes.tablet} {
		font-size: 40px;
		margin-bottom: 0;
	}
	${DeviceSizes.mobile} {
		font-size: 30px;
		margin-bottom: 0;
	}
`;

export const HomePageContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding-top: 200px;
	max-width: 55%;
	margin-left: auto;
	margin-right: auto;
	${DeviceSizes.laptop} {
		padding-top: 100px;
		max-width: 90%;
		text-align: center;
	}
	${DeviceSizes.tablet} {
		flex-direction: column;
		padding-top: 100px;
		max-width: 90%;
	}
	${DeviceSizes.mobile} {
		flex-direction: column;
		padding-top: 15px;
		max-width: 90%;
	}
`;

export const LogoContainer = styled.div`
	margin-bottom: 20px;
	display: flex;
	justify-content: center;
	gap: 30px;
	margin-bottom: 20;
	${DeviceSizes.tablet} {
		display: flex;
		justify-content: center;
		gap: 30px;
		margin-bottom: 0;
	}
	${DeviceSizes.mobile} {
		display: flex;
		justify-content: center;
		gap: 30px;
		margin-bottom: 0;
	}
`;

export const NavLinkHome = styled(NavLink)`
	${DeviceSizes.tablet} {
		margin-top: 0;
	}
	${DeviceSizes.mobile} {
		margin-top: 0;
	}
`;

export const HomeImage = styled.img`
	width: 40%;
	${DeviceSizes.laptop} {
		width: 40%;
		height: auto;
	}
	${DeviceSizes.tablet} {
		width: 80%;
		height: auto;
		align-self: center;
	}
	${DeviceSizes.mobile} {
		width: 80%;
		align-self: center;
	}
`;
