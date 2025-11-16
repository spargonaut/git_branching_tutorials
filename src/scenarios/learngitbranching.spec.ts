import { test, expect } from '@playwright/test';
import {fail} from "node:assert"
import {addCommit, clearCommandField} from "../utils/git_commands";

test('visit the sandbox page', async ({ page }) => {
  test.setTimeout(0);
  await page.goto('https://learngitbranching.js.org/');

  await page.getByText('this special link').click();

    const commandField = page.locator("[id = 'commandTextField']");

    await addCommit(commandField);
    await addCommit(commandField);
    await addCommit(commandField);
    await addCommit(commandField);
    await addCommit(commandField);
    await addCommit(commandField);

    await clearCommandField(commandField);

    await new Promise((resolve) => {
        page.on('close', resolve); // <-- add this
    });
});
