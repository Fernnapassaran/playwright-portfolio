import { test as setup } from '@playwright/test';

// Set the file path to save the login state
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  //go to the web
  await page.goto('https://www.saucedemo.com/');
  
  // 2.input login
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // 3. save the file JSON
  await page.context().storageState({ path: authFile });
});