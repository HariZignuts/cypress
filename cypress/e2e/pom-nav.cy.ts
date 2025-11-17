import {
  clickApi,
  clickUtilities,
  visitHomePage,
} from "../support/pageObjects/navBar";

describe("Navigation Bar Tests", () => {
  beforeEach(() => {
    visitHomePage();
  });

  it("should navigate to the cypress api page via nav bar", () => {
    clickApi();
    cy.location("pathname").should("eq", "/cypress-api");
  });

  it("should navigate to the utilities page via nav bar", () => {
    clickUtilities();
    cy.location("pathname").should("eq", "/utilities");
  });
});
