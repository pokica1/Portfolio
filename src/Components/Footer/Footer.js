import React from "react";
import * as S from "./Footer.Styled";
import "./Footer.css";

export const Footer = () => (
	<S.Footer>
		<S.Navlink to="/"> Orsolya Hubbarde</S.Navlink>
		<S.ThirdPartyLinkContainer>
			<S.ThirdPartyURL
				href="https://www.flaticon.com/"
				title="Icons"
				target="_blank"
				rel="noreferrer"
			>
				Icons created by Freepik - Flaticon
			</S.ThirdPartyURL>
			<S.ThirdPartyURL
				href="https://undraw.co/illustrations/"
				title="Illustrations"
				target="_blank"
				rel="noreferrer"
			>
				Illustrations created by Katerina Limpitsouni - unDraw
			</S.ThirdPartyURL>
		</S.ThirdPartyLinkContainer>
	</S.Footer>
);
