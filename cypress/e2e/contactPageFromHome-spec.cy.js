describe("Goes to Contact Page from Home Page", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("clicks on contact button and visits contact page", () => {
		cy.get("#homeContactButton").click();
		cy.url().should("include", "contact");
		cy.get("#formImageContainer").should("be.visible");
	});
});
