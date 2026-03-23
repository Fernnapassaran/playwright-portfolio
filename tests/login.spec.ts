import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login succes and data correct", async ({ page }) => {
  //create loginPage
  const loginPage = new LoginPage(page);

  //go to the web
  await loginPage.goto();

  await loginPage.login("standard_user", "secret_sauce");

  //login success when check result Products on screen
  await expect(loginPage.loginSuccess).toHaveText("Products");
});

test("Login fail and data incorrect", async ({ page }) => {
  //create loginPage
  const loginPage = new LoginPage(page);

  //go to the web
  await loginPage.goto();

  //make to login with user
  await loginPage.login("standard_user1", "secret_sauce1");

  //login success when check result Products on screen
  await expect(loginPage.errorMessage).toHaveText(
    "Epic sadface: Username and password do not match any user in this service",
  );
});
