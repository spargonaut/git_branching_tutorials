import {Locator} from "@playwright/test";

export const addCommit = async (commandField: Locator) => {
    await commandField.fill('git commit');
    await commandField.press('Enter');
}

export const checkoutCommit = async (commandField: Locator, commitHash: string) => {
    await commandField.fill(`git checkout ${commitHash}`);
    await commandField.press('Enter');
}

export const checkoutBranch = async (commandField: Locator, branchName: string) => {
    await commandField.fill(`git checkout ${branchName}`);
    await commandField.press('Enter');
}

export const createBranch = async (commandField: Locator, branchName: string) => {
    await commandField.fill(`git checkout -b ${branchName}`);
    await commandField.press('Enter');
}

export const mergeOtherBranchIntoCurrentBranch = async (commandField: Locator, otherbranchName: string) => {
    await commandField.fill(`git merge ${otherbranchName}`);
    await commandField.press('Enter');
}

export const clearCommandField = async (commandField: Locator) => {
    await commandField.fill('clear');
    await commandField.press('Enter');
}
