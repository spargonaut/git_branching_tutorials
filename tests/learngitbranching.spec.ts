import { test, expect } from '@playwright/test';
import {fail} from "node:assert"

test('visit the page', async ({ page }) => {
  await page.goto('https://learngitbranching.js.org/')

  // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  //   fail("this is expected")
});
