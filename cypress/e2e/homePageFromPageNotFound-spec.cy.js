describe("Goes to an unknown page", () => {
	beforeEach(() => {
		cy.visit("/lkhcakhu");
	});

	it("clicks on back to home button and end up on home page", () => {
		cy.get(".button-wrapper").click();
		cy.url().should("include", "/");
		cy.get(".article").should("be.visible");
	});
});
