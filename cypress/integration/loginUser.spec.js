describe("Given the Bonanza application and its login page", () => {
  describe("When the user 'test' logs in with her password", () => {
    it("Then she will be redirected to the historic page", () => {
      cy.visit("login");
      cy.get("label").contains("Username").type("test");
      cy.get("label").contains("Password").type(`1234{enter}`);
      cy.url().should("include", "/home");
    });
  });
});
