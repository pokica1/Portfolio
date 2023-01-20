import React from "react";
import { StyledPageContent } from "./PageContent.Styled";
// import "./PageContent.css";

export const PageContent = ({ children }) => {
	return <StyledPageContent>{children}</StyledPageContent>;
};
