import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ContactForm } from "./ContactForm";

describe("contact form", () => {
	it("image is visible", () => {
		render(
			<Router>
				<ContactForm />
			</Router>
		);
		expect(screen.getByRole("img")).toBeInTheDocument();
		expect(
			screen.getByAltText("woman standing with a big postcard")
		).toBeInTheDocument();
	});
});
