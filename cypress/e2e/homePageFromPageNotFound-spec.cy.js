describe("Goes to an unknown page", () => {
	beforeEach(() => {
		cy.visit("/lkhcakhu");
	});

	it("clicks on back to home button and end up on home page", () => {
		cy.get('[data-cy="button-wrapper"]').click();
		cy.url().should("include", "/");
		cy.get('[data-testid="article"]').should("be.visible");
	});
});
