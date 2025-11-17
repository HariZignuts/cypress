import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // This is the base URL for the application under test
    baseUrl: "https://example.cypress.io",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
