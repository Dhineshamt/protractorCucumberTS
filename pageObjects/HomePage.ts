import { by, element } from "protractor";

export class HomePage {
    public btnLearnHTML() {
        return element(by.cssContainingText(`a[class='w3-button tut-button']`, 'Learn HTML'));
    }
}