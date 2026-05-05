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

    this.inventoryItems = page.locator('[data-test="inventory-item"]');

    this.addtocartButton = page.locator('button:has-text("Add to cart")');

    this.removeButton = page.locator('button:has-text("Remove")');
  }

  //Action
  async addOnceItems(itemName: string) {
    // Find the product container by the given name
    const addItem = this.inventoryItems.filter({ hasText: itemName });

    // Target the "Add to cart" button within the container
    const addButton = addItem.locator(this.addtocartButton);

    // Use force: true to bypass any remaining interception issues in Safari
    await addButton.click();
  }

  async addMultipleItems(itemNames: string[]) {
    for (const name of itemNames) {
      // Locate the container and verify that it contains the expected name
      const addItems = this.inventoryItems.filter({ hasText: name });

      //Find the "Add to cart" button within the container and click it
      await addItems.locator(this.addtocartButton).click({ force: true });
    }
  }

  //Remove a product from the inventory page
  async removeMultipleItems(itemNames: string[]) {
    for (const name of itemNames) {
      const item = this.page.locator(".inventory_item", { hasText: name });
      // Target the button that has changed to "Remove"
      const removeButton = item.locator(this.removeButton);

      // Use force: true to bypass any remaining interception issues in Safari
      await removeButton.click({ force: true });
    }
  }

  async removeOnceItems(itemName: string) {
    // Find the product container by the given name
    const addItem = this.inventoryItems.filter({ hasText: itemName });

    // Target the button that has changed to "Remove"
    const remove = addItem.locator(this.removeButton);

    // Use force: true to bypass any remaining interception issues in Safari
    await this.removeButton.click({ force: true });
  }

  //Verify the button state changes back for the selected item.
  getItemButton(itemName: string) {
    return this.inventoryItems
      .filter({ hasText: itemName })
      .getByRole("button");
  }
}
