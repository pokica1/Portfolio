describe("Goes to an unknown page", () => {
	beforeEach(() => {
		cy.visit("/lkhcakhu");
	});

	it("Page not found message and home button should be visible", () => {
		cy.get("h1").contains("Oops, page not found");
		cy.get('[data-cy="button-wrapper"]').should("be.visible");
	});
});
