const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("@wdio/globals");

const LoginPage = require("../../po/login.page");
const SecurePage = require("../../po/inventory.page");
const pages = {
  login: LoginPage,
};

Given("I am on the login page", async (page) => {
  await pages[page].open();
});

When("I login with tomsmith and SuperSecretPassword!", async (username, password) => {
  await LoginPage.login(username, password);
});

Then("I should see a flash message saying You logged into a secure area!", async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveText(
    expect.stringContaining(message),
  );
});