describe("Network Tests", () => {
  beforeEach(() => {
    cy.visit("/commands/network-requests");
    cy.location("pathname").should("eq", "/commands/network-requests");

    cy.intercept("POST", "**/comments", (req) => {
      req.reply({
        statusCode: 201,
        body: {
          name: "Using POST in cy.intercept()",
          email: "hello@cypress.io",
          body: "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
          id: 501,
        },
      });
    }).as("postComment");
  });

  it("should post comment", () => {
    cy.get(".network-post.btn.btn-success").click();

    cy.wait("@postComment").then((interception) => {
      // Assert status
      expect(interception.response!.statusCode).to.eq(201);

      // Assert body values
      expect(interception.response!.body).to.include({
        name: "Using POST in cy.intercept()",
        email: "hello@cypress.io",
        body: "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
        id: 501,
      });
    });

    cy.get(".network-post-comment").should("contain.text", "POST successful!");
  });
});
