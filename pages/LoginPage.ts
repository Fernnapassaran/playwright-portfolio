import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
  //declare a variable
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly loginSuccess: Locator;

  //Identify the locator
  constructor(page: Page) {
    this.page = page;

    //find input from text in placeholder
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');

    //find name in button
    this.loginButton = page.locator('[data-test="login-button"]');

    //find error messages
    this.errorMessage = page.locator('[data-test= "error"]');

    this.loginSuccess = page.locator('[data-test="title"]');
  }

  //action
  //step 1
  async goto() {
    //go to the web
    await this.page.goto("/");
  }

  //Step2
  async login(user: string, pass: string) {
    //Scroll to the input box so it is visible on mobile screens
    await this.usernameInput.scrollIntoViewIfNeeded();
    //Wait for the input box to be visible before typing
    await this.usernameInput.waitFor({ state: "visible" });
    //Fill username
    await this.usernameInput.fill(user);
    //Fill password
    await this.passwordInput.fill(pass);
    // Scroll to the button
    await this.loginButton.scrollIntoViewIfNeeded();
    //click it
    await this.loginButton.click();
  }
}
