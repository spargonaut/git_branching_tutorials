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

    const commandField = page.locator("[id = 'commandTextField']");
    await addCommit(commandField);

    await createBranch(commandField, "foo");
    await addCommit(commandField);
    await addCommit(commandField);

    await checkoutBranch(commandField, "main");
    await addCommit(commandField);

    await checkoutBranch(commandField, "foo");
    await mergeOtherBranchIntoCurrentBranch(commandField, "main");
    await addCommit(commandField);

    await checkoutBranch(commandField, "main");
    await addCommit(commandField);

    await checkoutBranch(commandField, "foo");
    await addCommit(commandField);

    await checkoutBranch(commandField, "foo");
    await mergeOtherBranchIntoCurrentBranch(commandField, "main");
    // ASK FOR A PR

    await checkoutCommit(commandField, "c1");
    await createBranch(commandField, "bar");
    await addCommit(commandField);
    await addCommit(commandField);
    await addCommit(commandField);
    await mergeOtherBranchIntoCurrentBranch(commandField, "main");

    // merge foo into main
    await checkoutBranch(commandField, "main");
    await mergeOtherBranchIntoCurrentBranch(commandField, "foo");
    await addCommit(commandField);

    await clearCommandField(commandField);

    await new Promise((resolve) => {
        page.on('close', resolve); // <-- add this
    });
});
