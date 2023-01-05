describe("Goes to an unknown page", () => {
	beforeEach(() => {
		cy.visit("/lkhcakhu");
	});

	it("Page not found message and home button should be visible", () => {
		cy.get("h1").contains("Oops, page not found");
		cy.get(".button-wrapper").should("be.visible");
	});
});
