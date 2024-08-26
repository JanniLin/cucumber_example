import { Given, When, Then } from "@cucumber/cucumber";
import pagesFactory from "../../po/pagesFactory.js";

const header = pagesFactory("inventory").header;
const loginPage = pagesFactory("login");
const loginForm = loginPage.loginForm;

Given("I am on the login page", async  () =>{
  await loginPage.open()

});

When("I enter {string} in the username field", async  (username)=> {
  await loginForm.usernameField.setValue(username);
});

When("I enter {string} in the password field", async  (password)=> {
  await loginForm.passwordField.setValue(password);
});

When("I click the login button", async  ()=> {
  await loginForm.loginButton.click();
});

Then("I should see the header {string}", async  (expectedHeader)=> {
  await expect(header.headerText).toHaveText(expectedHeader);
});
