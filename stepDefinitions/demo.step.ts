import { Given, Then } from "cucumber";
import { browser, ExpectedConditions } from "protractor";
import chai from "chai";
const expect = chai.expect;
import { HomePage } from './../pageObjects/HomePage';

const homePage = new HomePage();


Given('I launch w3 schools website', async () => {
    await browser.get('https://www.w3schools.com/');
})

Then('I land on w3 schools website', async () => {
    expect(await browser.getTitle()).to.equal('W3Schools Online Web Tutorials');
})

Given('I click LearnHTML button', async () => {
    const EC = ExpectedConditions;
    let condition = EC.elementToBeClickable(await homePage.btnLearnHTML());
    await browser.wait(condition, 30000);
    await homePage.btnLearnHTML().click();
})

Then('I should go to html page', async () => {
    expect(await browser.getTitle()).to.equal('HTML Tutorial');
})
