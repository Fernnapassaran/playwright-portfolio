import { expect, type Locator, type Page } from "@playwright/test";

export class CartPage {
  //declare a variable
  readonly page: Page;
  readonly cartButton: Locator;
  readonly backShoppingButton: Locator;
  readonly checkOutButton: Locator;
  readonly removeButton: Locator;

  //Identify the locator
  constructor(page: Page) {
    this.page = page;

    //find locator cert
    this.cartButton = page.locator('[data-test="shopping-cart-link"]');

    //find locator check out button
    this.checkOutButton = page.locator('[data-test="checkout"]');

    //find locator back button
    this.backShoppingButton = page.locator('[data-test="continue-shopping"]');

    //find locator remove button
    this.removeButton = page.locator(
      '[data-test="remove-sauce-labs-backpack"]',
    );
  }

  //Action
  async removeItem(itemName: string) {
    const itemInCart = this.page.locator(".cart_item", { hasText: itemName });

    // On the cart page, the remove button is typically labeled "Remove"
    await itemInCart.locator('button:has-text("Remove")').click();
  }

  async clickCheckout() {
    //click button check out
    await this.checkOutButton.click();
    
  }

  async clickContinue() {
    //click button Continue Shopping
    await this.backShoppingButton.click();
  }

  async removeMultipleItems(itemNames: string[]) {
    
    for (const name of itemNames) {
      // Find the product container with an exact name match
      const itemInCart = this.page.locator(".cart_item", { hasText: name });

      // Target the "Remove" button within the container
      const removeButton = itemInCart.locator('button:has-text("Remove")');

      // Verify and click
      await expect(removeButton).toBeVisible();
      await removeButton.click();
    }
  }
}

