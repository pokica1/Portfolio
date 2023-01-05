describe("Successful Message sent", () => {
	beforeEach(() => {
		cy.visit("/contact");
	});

	it("sends message successfully", () => {
		cy.get('input[type="text"]').type("John Smith");
		cy.get('input[type="email"]').type("johnsmith@gmail.com");
		cy.get('textarea[name="message"]').type("This is a test message");
		cy.get('input[type="submit"]').click();
		cy.intercept(
			{
				method: "POST",
				url: "https://api.emailjs.com/api/v1.0/email/send-form",
			},
			[]
		).as("sendMessage");
		cy.wait("@sendMessage").its("response.statusCode").should("eq", 200);
		cy.get(".message.visible").contains(
			"Thank you for your message, it has been sent!"
		);
	});
});
