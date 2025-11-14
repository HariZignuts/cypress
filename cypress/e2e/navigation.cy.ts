describe("Navigation Tests on Utilities Page", () => {
  beforeEach(() => {
    // Navigate to the utilities page
    cy.visit("/utilities");
  });

  it("should navigate to the utilities page", () => {
    // Add assertions to verify successful navigation
    cy.get("a[href='/utilities']");

    cy.get("h1")
      .should("exist")
      .should("be.visible")
      .should("have.text", "Utilities");
  });
});

describe("Main Navigation Bar", () => {
  beforeEach(() => {
    // Navigate to the home page before each test
    cy.visit("/");
  });

  it("click on cypress api link in the main navigation bar", () => {
    cy.get("nav a[href='/cypress-api']").click();
    cy.location("pathname").should("eq", "/cypress-api");
  });
});
