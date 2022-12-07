import React from "react";
import { PageContent } from "../../PageContent/PageContent";
import { ContactForm } from "../../ContactForm/ContactForm";
import "./ContactPage.css";

const ContactPage = () => (
	<PageContent>
		<h1>Contact</h1>
		<ContactForm />
	</PageContent>
);

export default ContactPage;
