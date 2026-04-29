import { test as setup } from '@playwright/test';
import testData from '../data/users.json';

// Set the file path to save the login state
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  //go to the web
  await page.goto('/inventory.html');
  
  // 2.input login
  await page.locator('[data-test="username"]').fill(testData.validUser.username);
  await page.locator('[data-test="password"]').fill(testData.validUser.password);
  await page.locator('[data-test="login-button"]').click();

  // 3. save the file JSON
  await page.context().storageState({ path: authFile });
});