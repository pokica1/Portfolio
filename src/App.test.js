import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app", () => {
	it("skills to be there", () => {
		render(<App />);
		expect(screen.getByText("Skills")).toBeInTheDocument();
	});
});
