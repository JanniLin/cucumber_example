import { Before } from "@cucumber/cucumber";
import pagesFactory from "../../po/pagesFactory.js";
let header
let loginForm
 Before(async function () {
  header = pagesFactory("inventory").header;
  const loginPage = pagesFactory("login");
  loginForm = loginPage.loginForm;
  await loginPage.open();
});

