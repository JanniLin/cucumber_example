export const config = {
  runner: "local",
  baseUrl: "https://www.saucedemo.com",

  specs: ["./../tests/features/**/*.feature"],

  maxInstances: 10,

  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless", "--start-maximized"],
      },
      acceptInsecureCerts: true,
    },
    {
      maxInstances: 5,
      browserName: "MicrosoftEdge",
      "ms:edgeOptions": {
        args: ["--headless", "--start-maximized"],
      },
      acceptInsecureCerts: true,
    },
  ],


  logLevel: "warn",

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 2,

  framework: "cucumber",

  cucumberOpts: {
    require: [
      "./../tests/step-definitions/**/*.steps.js",
      //'./../../tests/support/hooks.js'
    ],
    backtrace: true,
    requireModule: [],
    dryRun: false,
    failFast: false,
    format: ["pretty"],
    colors: true,
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tagExpression: "",
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  before: () => {
    browser.execute(() => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .getRegistrations()
          .then(function (registrations) {
            for (let registration of registrations) {
              registration.unregister();
            }
          });
      }
    });
  },
};
