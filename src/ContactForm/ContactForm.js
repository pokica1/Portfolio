import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

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
					// alert("Thank you for your message");
					// e.target.reset();
					setIsMessageSent(!isMessageSent);
				},
				(error) => {
					console.log(error.text);
					alert("Ooops, something went wrong");
				}
			);
	};

	return (
		<div id="formImageContainer">
			<form
				className={
					isMessageSent ? "formContainer notVisible" : "formContainer visible"
				}
				ref={form}
				onSubmit={sendEmail}
			>
				<label>Name*</label>
				<input className="inputField" type="text" name="user_name" required />
				<label>Email*</label>
				<input className="inputField" type="email" name="user_email" required />
				<label>Message*</label>
				<textarea name="message" required />
				<input className="submit" type="submit" value="Send" />
			</form>
			<div className={isMessageSent ? "message visible" : "message notVisible"}>
				Thank you for your message, it has been sent!
			</div>
			<img
				id="contactImage"
				src="contactImage.svg"
				alt="woman standing with a big postcard"
			/>
		</div>
	);
};
