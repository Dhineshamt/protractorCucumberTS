import { After, Status } from "cucumber";
import { browser } from "protractor";

After(async function(scenario) {
    if(scenario.result.status === Status.FAILED) {
        const snapshot = await browser.takeScreenshot();
        this.attach(snapshot, 'image/png');
    }
});
