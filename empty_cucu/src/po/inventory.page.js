const { $ } = require("@wdio/globals");
const Page = require("./base.page");


class InventoryPage extends Page {
  constructor() {
    super("");
  }
  get flashAlert() {
    return $("#flash");
  }
}

module.exports = new InventoryPage();
