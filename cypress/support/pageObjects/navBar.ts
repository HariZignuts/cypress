export const navBarSelectors = {
  navbarUtilities: 'nav a[href="/utilities"]',
  navabarApi: 'nav a[href="/cypress-api"]',
};

export const visitHomePage = () => {
  cy.visit("/");
};

export const clickUtilities = () => {
  cy.get(navBarSelectors.navbarUtilities).click();
};

export const clickApi = () => {
  cy.get(navBarSelectors.navabarApi).click();
};
