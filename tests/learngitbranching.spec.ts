import { test, expect } from '@playwright/test';
import {fail} from "node:assert"

test('visit the sandbox page', async ({ page }) => {
  test.setTimeout(0);
  await page.goto('https://learngitbranching.js.org/');

  await page.getByText('this special link').click();

    const commandField = page.locator("[id = 'commandTextField']");

    await commandField.fill('git commit');
    await commandField.press('Enter');

    await commandField.fill('git commit');
    await commandField.press('Enter');

    await commandField.fill('git commit');
    await commandField.press('Enter');

    await commandField.fill('git commit');
    await commandField.press('Enter');

    await commandField.fill('git commit');
    await commandField.press('Enter');

    await commandField.fill('git commit');
    await commandField.press('Enter');

    await new Promise((resolve) => {
        page.on('close', resolve); // <-- add this
    });
});
