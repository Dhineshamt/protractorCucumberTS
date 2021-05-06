import { browser, Config } from "protractor";
import * as reporter from "cucumber-html-reporter";


export let config: Config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    directConnect: false,
    ignoreUncaughtExceptions: true,
    
    //Cucumber related config
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    SELENIUM_PROMISE_MANAGER: false,
    defaultTimeoutInterval: 30000,

    capabilities: {
        browserName: 'chrome',

    },

    specs: ['../features/demo.feature'],

    cucumberOpts: {
        format: 'json:./cucumberreport.json',
        require: [
            './stepDefinitions/*.js'
        ]
    },

    onPrepare() {
        browser.waitForAngularEnabled(false);
    },

    onComplete: () => {
        let options = {
            theme: 'bootstrap',
            jsonFile: './cucumberreport.json',
            output: './report/cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version":"0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };

        reporter.generate(options)
    }
    
}