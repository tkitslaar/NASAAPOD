/// <reference types="cypress" />

context("loading the page", () => {
  beforeEach(() => {
    cy.visit("/template");
  });

  it("loads the vue component", () => {
    cy.get("#app").within(() => {
      cy.get("h1").contains("Vue");
    });
  });
});
