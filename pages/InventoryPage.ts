import { expect, type Locator, type Page } from "@playwright/test";

export class InventoryPage {
  //declare a variable
  readonly page: Page;
  readonly addtocartButton: Locator;
  readonly removeButton: Locator;
  readonly shoppingCartBadge: Locator;
  readonly inventoryItems: Locator;

  //Identify the locator
  constructor(page: Page) {
    this.page = page;

    //find number shoppingCartBadge after add to cart and show remove button
    this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');

    this.inventoryItems = page.locator(".inventory_item");

    this.addtocartButton = page.locator('button:has-text("Add to cart")');

    this.removeButton = page.locator('button:has-text("Remove")');
  }

  //Action
  async addOnceItems(itemName: string) {
    // Find the product container by the given name
    const addItem = this.inventoryItems.filter({ hasText: itemName });

    //Scroll down so it is visible on mobile screens
    await addItem.locator(this.addtocartButton).scrollIntoViewIfNeeded();

    // Target the "Add to cart" button within the container
    const addButton = addItem.locator(this.addtocartButton);

    // Wait for the button to be visible and ready to be clicked (helps reduce timeout issues)
    await expect(addButton).toBeVisible();

    await addButton.click();
  }

  async addMultipleItems(itemNames: string[]) {
    for (const name of itemNames) {
      // Locate the container and verify that it contains the expected name
      const addItems = this.inventoryItems.filter({ hasText: name });
      //Scroll down so it is visible on mobile screens
      await addItems.locator(this.addtocartButton).scrollIntoViewIfNeeded();

      await expect(addItems).toBeVisible();

      //Find the "Add to cart" button within the container and click it
      await addItems.locator(this.addtocartButton).click();
    }
  }

  //Remove a product from the inventory page
  async removeMultipleItems(itemNames: string) {
    const item = this.page.locator(".inventory_item", {
      hasText: itemNames,
    });

    // Target the button that has changed to "Remove"
    const removeButton = item.locator(this.removeButton);

    //Scroll down so it is visible on mobile screens
    await removeButton.locator(this.removeButton).scrollIntoViewIfNeeded();

    await expect(removeButton).toBeVisible();

    await removeButton.click();
  }
}
