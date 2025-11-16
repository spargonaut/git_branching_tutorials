import {Locator} from "@playwright/test";

export const addCommit = async (commandField: Locator) => {
    await commandField.fill('git commit');
    await commandField.press('Enter');
}

export const clearCommandField = async (commandField: Locator) => {
    await commandField.fill('clear');
    await commandField.press('Enter');
}
