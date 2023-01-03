import React from "react";
import { PageContent } from "../../Components/PageContent/PageContent";
import { ContactForm } from "../../Components/ContactForm/ContactForm";
import "./ContactPage.css";

const ContactPage = () => (
	<PageContent>
		<h1>Contact</h1>
		<ContactForm />
	</PageContent>
);

export default ContactPage;
