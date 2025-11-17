describe("Login Session Tests", () => {
  const email = "session@example.com";
  const password = "password123";

  it("should login and preserve session across tests", () => {
    cy.sessionLogin(email, password);
  });

  it("should use cache and not login again", () => {
    cy.sessionLogin(email, password);
  });
});
