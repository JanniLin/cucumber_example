const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://next.privat24.ua',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
