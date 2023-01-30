describe("Goes Skills Page", () => {
	beforeEach(() => {
		cy.visit("/skills");
	});

	it("Skills, Education and Experience titles should be visible", () => {
		cy.get('[data-testid="skillsTitle"]').should("be.visible");
		cy.get('[data-testid="educationTitle"]').should("be.visible");
		cy.get('[data-testid="experienceTitle"]').should("be.visible");
	});
});
