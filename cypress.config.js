const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '87pqon',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
