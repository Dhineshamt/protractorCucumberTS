import { Given, Then } from "cucumber"
import { browser, by, element } from "protractor"
import {expect} from "chai";

// import chai from "chai";
// const expect = chai.expect;

let switchWindow: string[];
let windows;

Given('I launch webdriver university', async () => {
    await browser.get('http://webdriveruniversity.com/index.html');
    console.log(browser.getWindowHandle());
})

Then('I navigate to webdriver university', async () => {
    expect(await browser.getTitle()).to.equal('WebDriverUniversity.com');
})

Given('I click on login portal button', async () => {
    await element(by.css('#contact-us div div h1')).click();
    // await browser.sleep(5000);
})

Then('I navigate to login portal', async () => {
    await browser.getAllWindowHandles().then((handles) => {
        switchWindow = handles;
    });

    await browser.switchTo().window(switchWindow[1]);
        expect(await element(by.css('.section_header ')).getText()).to.contain('CONTACT US');
})

Given('I switch to webdriver university window', async () => {
    await browser.switchTo().window(switchWindow[0]);
})
