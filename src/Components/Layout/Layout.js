import React from "react";
import NavBar from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import * as S from "./Layout.Styled";

export const Layout = ({ children }) => {
	return (
		<>
			<NavBar />
			<S.Layout>{children}</S.Layout>
			<Footer />
		</>
	);
};
