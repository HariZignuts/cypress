describe("Custom Command Tests", () => {
  beforeEach(() => {
    cy.visit("/commands/actions");
    cy.location("pathname").should("eq", "/commands/actions");
  });

  it("should use a custom command to login", () => {
    cy.login("my-email@test.com", "my-password");
    cy.get(".action-email").should("have.value", "my-email@test.com");
    cy.get(".action-focus").should("have.value", "my-password");
  });
});
