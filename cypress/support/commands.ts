/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add("getByDataCy", (selector) => {
  return cy.get(`[data-cy=${selector}]`);
});

Cypress.Commands.add("login", (email: string, password: string) => {
  cy.get(".action-email").clear().type(email);
  cy.get(".action-focus").clear().type(password);
});

Cypress.Commands.add("sessionLogin", (email: string, passoword: string) => {
  cy.session([email, passoword], () => {
    cy.visit("/commands/actions");
    cy.login(email, passoword);

    cy.get(".action-email").should("have.value", email);
    cy.get(".action-focus").should("have.value", passoword);
  });
});

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      getByDataCy(selector: string): Chainable<JQuery<HTMLElement>>;
      login(email: string, password: string): Chainable<void>;
      sessionLogin(email: string, passoword: string): Chainable<void>;
    }
  }
}

export {};
