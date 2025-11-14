describe("Actions Tests", () => {
  it("should perform a click action on the button", () => {
    // Visit the actions page
    cy.visit("/commands/actions");

    // Perform a click action on the button with id 'action-btn'
    cy.get(".action-email")
    .clear()
    .type("harim@zignuts.com")
    .should("have.value", "harim@zignuts.com");
  });
});
