const { $ } = require("@wdio/globals");
const Page = require("./base.page");


class LoginPage extends Page {

  get inputUsername() {
    return $("#username");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }


  constructor() {
    super("/login");
  }
}

module.exports = new LoginPage();
