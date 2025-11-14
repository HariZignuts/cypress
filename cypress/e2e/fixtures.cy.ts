describe("Fixtures Tests", () => {
  beforeEach(() => {
    cy.fixture("challenge.json").as("challengeData");
    cy.visit("/commands/actions");

    cy.location("pathname").should("eq", "/commands/actions");
  });

  it("should use fixture data in the test", function () {
    cy.get(".action-email")
      .clear()
      .type(this.challengeData.text)
      .should("have.value", this.challengeData.text);
  });
});
