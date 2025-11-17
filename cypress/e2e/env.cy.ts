describe("Environment Variable Tests", () => {
  beforeEach(() => {
    cy.visit("/commands/actions");
    cy.location("pathname").should("eq", "/commands/actions");

    const secretPassword = Cypress.env("SECRET_PASSWORD");
    cy.wrap(secretPassword).as("secretPassword");
  });

  it("should use environment variable in the test", function () {
    cy.get(".action-focus")
      .clear()
      .type(this.secretPassword)
      .should("have.value", this.secretPassword);

    cy.get(".action-focus").then(($input) => {
      expect($input.val()).to.equal(this.secretPassword);
    });
  });
});
