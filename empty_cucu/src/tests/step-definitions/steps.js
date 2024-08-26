const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const LoginPage = require("../../po/login.page");
const SecurePage = require("../../po/inventory.page");

const pages = {
  login: LoginPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveText(
    expect.stringContaining(message),
  );
});



// const { Given, When, Then } = require("@wdio/cucumber-framework");
// const { expect } = require("@wdio/globals");
//
// const LoginPage = require("../../po/login.page");
// const SecurePage = require("../../po/inventory.page");
//
// // Шаги для успешного логина с корректными учетными данными
// Given("I am on the login page", async () => {
//   await LoginPage.open();
// });
//
// When("I login with tomsmith and SuperSecretPassword!", async () => {
//   await LoginPage.login("tomsmith", "SuperSecretPassword!");
// });
//
// Then("I should see a flash message saying You logged into a secure area!", async () => {
//   await expect(SecurePage.flashAlert).toBeExisting();
//   await expect(SecurePage.flashAlert).toHaveText(
//     "You logged into a secure area!"
//   );
// });
//
// // Шаги для логина с неправильными учетными данными
// Given("I am on the login page", async () => {
//   await LoginPage.open();
// });
//
// When("I login with foobar and barfoo", async () => {
//   await LoginPage.login("foobar", "barfoo");
// });
//
// Then("I should see a flash message saying Your username is invalid!", async () => {
//   await expect(SecurePage.flashAlert).toBeExisting();
//   await expect(SecurePage.flashAlert).toHaveText(
//     "Your username is invalid!"
//   );
// });
