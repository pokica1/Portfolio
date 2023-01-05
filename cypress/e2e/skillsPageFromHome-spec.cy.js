describe("Goes to Skills from Home Page from navbar", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("clicks on skills in navbar and visits skills page", () => {
		cy.get("#skillsLink").click();
		cy.url().should("include", "skills");
		cy.get("#skills-title").should("be.visible");
	});
});
