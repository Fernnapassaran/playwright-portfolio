import { expect, type Locator, type Page } from "@playwright/test";

export class InventoryPage {
  //declare a variable
  readonly page: Page;
  readonly addtocartButton: Locator;
  readonly shoppingCartBadge: Locator;
  readonly removeButton: Locator;

  //Identify the locator
  constructor(page: Page) {
    this.page = page;

    //find locator add to cart button
    this.addtocartButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );

    //find 2nd add to cart button
    this.addtocartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');

    //find number shoppingCartBadge after add to cart and show remove button
    this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');

    this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');

  }

  //Action
  async addItemTocart() {
    //Tap button add to chart
    await this.addtocartButton.click();

  }
}
