import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import testData from "../data/users.json";

test("Login succes and data correct", async ({ page }) => {
  //create loginPage
  const loginPage = new LoginPage(page);

  //go to the web
  await loginPage.goto();

  await loginPage.login(testData.validUser.username,testData.validUser.password);

  //login success when check result Products on screen
  await expect(loginPage.loginSuccess).toHaveText("Products");
});

test("Login fail and data incorrect", async ({ page }) => {
  //create loginPage
  const loginPage = new LoginPage(page);

  //go to the web
  await loginPage.goto();

  //make to login with user
  await loginPage.login(testData.invalidUser.username,testData.invalidUser.password);

  //login success when check result Products on screen
  await expect(loginPage.errorMessage).toHaveText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});

test("Login fail and data loked", async ({ page }) => {
  //create loginPage
  const loginPage = new LoginPage(page);

  //go to the web
  await loginPage.goto();

  //make to login with user
  await loginPage.login(testData.lockedOutUser.username,testData.lockedOutUser.password);

  //login success when check result Products on screen
  await expect(loginPage.errorMessage).toHaveText(
    "Epic sadface: Sorry, this user has been locked out.",
  );
});

