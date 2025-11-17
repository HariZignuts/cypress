import * as actionPage from "../support/pageObjects/actionsPage";

describe("Page Object Model Tests", () => {
  beforeEach(() => {
    actionPage.visit();
  });

  it("should should login using page object model", () => {
    actionPage.login("user@example.com", "password123");

    cy.get(".action-email").should("have.value", "user@example.com");
    cy.get(".action-focus").should("have.value", "password123");
  });
});
