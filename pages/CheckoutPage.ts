import { expect, type Locator, type Page } from "@playwright/test";

export class CheckoutPage {
  //declare a variable
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly zipCodeInput: Locator;
  readonly continueButton: Locator;
  readonly cancelButton: Locator;
  readonly checkOutButton: Locator;
  readonly cartButton: Locator;
  readonly finishButton: Locator;
  readonly checkOutSuccess: Locator;
  

  //Identify the locator
  constructor(page: Page) {
    this.page = page;

    //find locator cert
    this.cartButton = page.locator('[data-test="shopping-cart-link"]');

    //find locator check out button
    this.checkOutButton = page.locator('[data-test="checkout"]');

    //find locator first name
    this.firstNameInput = page.locator('[data-test="firstName"]');

    //find locator last name
    this.lastNameInput = page.locator('[data-test="lastName"]');

    //find locator zipcode
    this.zipCodeInput = page.locator('[data-test="postalCode"]')

    //find locator Continue button
    this.continueButton = page.locator('[data-test="continue"]')

    //find locator Cancel button
    this.cancelButton = page.locator('[data-test="cancel"]');

    //find locator finish button
    this.finishButton = page.locator('[data-test="finish"]');

    //find locator check out success
    this.checkOutSuccess = page.locator('[data-test="complete-header"]');
  
 }

  //Action
  async checkOutItem(firstname: string, lastname: string, zipcode: string) {
    //Tap cart
    await this.cartButton.click();

    //Tap check out button
    await this.checkOutButton.click();

    //input firstname, lastname, zipcode
    await this.firstNameInput.fill(firstname);
    await this.lastNameInput.fill(lastname);
    await this.zipCodeInput.fill(zipcode);

    //tap button
    await this.continueButton.click();
    await this.finishButton.click();

  }

}
