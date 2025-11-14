describe("Home Page Smoke Tests", () => {
  it("should load the home page successfully", () => {
    cy.visit("/");
  });
});