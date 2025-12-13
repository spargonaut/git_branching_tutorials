import { test, expect } from '@playwright/test';
import {
    addCommit,
    checkoutBranch,
    checkoutCommit,
    clearCommandField,
    createBranch,
    mergeOtherBranchIntoCurrentBranch
} from "../utils/git_commands";

test('make a merge mess', async ({ page }) => {
  test.setTimeout(0);
  await page.goto('https://learngitbranching.js.org/');
  await page.getByText('this special link').click();

    const mainBranchName = "main";
    const branchOneName = "alice";
    const branchTwoName = "bob";

    const commandField = page.locator("[id = 'commandTextField']");
    await addCommit(commandField);

    await createBranch(commandField, branchOneName);
    await addCommit(commandField);
    await addCommit(commandField);

    await checkoutBranch(commandField, mainBranchName);
    await addCommit(commandField);

    await checkoutBranch(commandField, branchOneName);
    await mergeOtherBranchIntoCurrentBranch(commandField, mainBranchName);
    await addCommit(commandField);

    await checkoutBranch(commandField, mainBranchName);
    await addCommit(commandField);

    await checkoutBranch(commandField, branchOneName);
    await addCommit(commandField);

    await checkoutBranch(commandField, branchOneName);
    await mergeOtherBranchIntoCurrentBranch(commandField, mainBranchName);
    // ASK FOR A PR

    await checkoutCommit(commandField, "c1");
    await createBranch(commandField, branchTwoName);
    await addCommit(commandField);
    await addCommit(commandField);
    await addCommit(commandField);
    await mergeOtherBranchIntoCurrentBranch(commandField, mainBranchName);

    // merge branch one into main
    await checkoutBranch(commandField, mainBranchName);
    await mergeOtherBranchIntoCurrentBranch(commandField, branchOneName);
    await addCommit(commandField);

    await clearCommandField(commandField);

    await new Promise((resolve) => {
        page.on('close', resolve); // <-- add this
    });
});
