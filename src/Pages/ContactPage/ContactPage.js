import React from "react";
import { PageContent } from "../../Components/PageContent/PageContent";
import { ContactForm } from "../../Components/ContactForm/ContactForm";
import * as S from "./ContactPage.Styled";
// import "./ContactPage.css";

const ContactPage = () => (
	<PageContent>
		<S.PageTitle>Contact</S.PageTitle>
		<ContactForm />
	</PageContent>
);

export default ContactPage;
