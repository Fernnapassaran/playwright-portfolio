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
    // Wait for the input box to be visible before typing
    await this.usernameInput.waitFor({ state: "visible" });
    // Fill username
    await this.usernameInput.fill(user);
    // Fill password
    await this.passwordInput.fill(pass);
    //click button
    await this.loginButton.click();
  }
}
