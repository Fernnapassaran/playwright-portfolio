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

    this.addtocartButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]',
    );
    this.removeButton = page.locator(
      '[data-test="remove-sauce-labs-backpack"]',
    );
  }

  //Action
  async addOnceItems(itemName: string) {
    // Find the product container by the given name
    const itemContainer = this.page.locator(".inventory_item", {
      hasText: itemName,
    });

    // Target the "Add to cart" button within the container
    const addButton = itemContainer.locator('button:has-text("Add to cart")');

    // Wait for the button to be visible and ready to be clicked (helps reduce timeout issues)
    await expect(addButton).toBeVisible();

    await addButton.click();
  }

  async addMultipleItems(itemNames: string[]) {
    for (const name of itemNames) {
      // Locate the container and verify that it contains the expected name
      const item = this.page.locator(".inventory_item", { hasText: name });

      // Find the "Add to cart" button within the container and click it
      await item.locator('button:has-text("Add to cart")').click();
    }
  }

  // Remove a product from the inventory page
  async removeMultipleItems(itemName: string) {
    const itemContainer = this.page.locator(".inventory_item", {
      hasText: itemName,
    });
    // Target the button that has changed to "Remove"
    const removeButton = itemContainer.locator('button:has-text("Remove")');

    await expect(removeButton).toBeVisible();
    await removeButton.click();
  }
}
