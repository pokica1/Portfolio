import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { BrowserRouter as Router } from "react-router-dom";

describe("home page", () => {
	it("some text is visible", () => {
		render(
			<Router>
				<HomePage />
			</Router>
		);
		// screen.getByRole("");
		expect(screen.getByRole("img")).toBeInTheDocument();
	});
});
