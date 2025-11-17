// --- Selectors ---
// We export them so they can be used if needed
export const actionsPageSelectors = {
  emailInput: ".action-email",
  passwordInput: ".action-focus",
  submitButton: '[data-cy="action-btn"]',
};

// --- App Actions ---
// We export functions for each "action" a user can take

export const visit = () => {
  cy.visit("/commands/actions");
};

export const typeEmail = (email: string) => {
  cy.get(actionsPageSelectors.emailInput).clear().type(email);
};

export const typePassword = (password: string) => {
  cy.get(actionsPageSelectors.passwordInput).clear().type(password);
};

// This is a "business logic" function that combines actions
export const login = (email: string, password: string) => {
  typeEmail(email);
  typePassword(password);
  // We're not clicking submit, just like our custom command
};
