import React, { useRef, useState } from "react";
import { FormField } from "../FormField/FormField";
import * as S from "./ContactForm.Styled";
import emailjs from "@emailjs/browser";
// import "./ContactForm.css";

export const ContactForm = () => {
	const form = useRef();
	const [isMessageSent, setIsMessageSent] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				`${process.env.REACT_APP_YOUR_SERVICE_ID}`,
				`${process.env.REACT_APP_YOUR_TEMPLATE_ID}`,
				form.current,
				`${process.env.REACT_APP_YOUR_PUBLIC_KEY}`
			)
			.then(
				(result) => {
					console.log(result.text);
					setIsMessageSent(!isMessageSent);
				},
				(error) => {
					console.log(error.text);
					alert("Ooops, something went wrong");
				}
			);
	};

	return (
		<S.FormImageContainer data-testid="formImageContainer">
			{!isMessageSent && (
				<S.FormContainer ref={form} onSubmit={sendEmail}>
					<FormField labelText="Name*" type="text" name="user_name" />
					<FormField labelText="Email*" type="email" name="user_email" />
					<S.Label>Message*</S.Label>
					<S.TextArea name="message" required />
					<S.SubmitButton className="submit" type="submit" value="Send" />
				</S.FormContainer>
			)}
			{isMessageSent && (
				<S.SuccessMessage data-testid="successMessage">
					Thank you for your message, it has been sent!
				</S.SuccessMessage>
			)}
			<S.ContactImage
				id="contactImage"
				src="contactImage.svg"
				alt="woman standing with a big postcard"
			/>
		</S.FormImageContainer>
	);
};
