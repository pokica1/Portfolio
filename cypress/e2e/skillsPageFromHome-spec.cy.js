describe("Goes to Skills from Home Page from navbar", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("clicks on skills in navbar and visits skills page", () => {
		cy.get('[data-cy="skillsLink"]').click();
		cy.url().should("include", "skills");
		cy.get('[data-testid="skillsTitle"]').should("be.visible");
	});
});
