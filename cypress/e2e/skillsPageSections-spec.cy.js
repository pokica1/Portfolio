describe("Goes Skills Page", () => {
	beforeEach(() => {
		cy.visit("/skills");
	});

	it("Skills, Education and Experience titles should be visible", () => {
		cy.get("#skills-title").should("be.visible");
		cy.get("#education-title").should("be.visible");
		cy.get("#experience-title").should("be.visible");
	});
});
