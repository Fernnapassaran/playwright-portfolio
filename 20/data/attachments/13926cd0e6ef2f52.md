# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: inventory.spec.ts >> add multiple items success
- Location: tests\inventory.spec.ts:29:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.scrollIntoViewIfNeeded: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' }).locator(locator('button:has-text("Add to cart")'))

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { expect, type Locator, type Page } from "@playwright/test";
  2  | 
  3  | export class InventoryPage {
  4  |   //declare a variable
  5  |   readonly page: Page;
  6  |   readonly addtocartButton: Locator;
  7  |   readonly removeButton: Locator;
  8  |   readonly shoppingCartBadge: Locator;
  9  |   readonly inventoryItems: Locator;
  10 | 
  11 |   //Identify the locator
  12 |   constructor(page: Page) {
  13 |     this.page = page;
  14 | 
  15 |     //find number shoppingCartBadge after add to cart and show remove button
  16 |     this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
  17 | 
  18 |     this.inventoryItems = page.locator(".inventory_item");
  19 | 
  20 |     this.addtocartButton = page.locator('button:has-text("Add to cart")');
  21 | 
  22 |     this.removeButton = page.locator('button:has-text("Remove")');
  23 |   }
  24 | 
  25 |   //Action
  26 |   async addOnceItems(itemName: string) {
  27 |     // Find the product container by the given name
  28 |     const addItem = this.inventoryItems.filter({ hasText: itemName });
  29 | 
  30 |     // Target the "Add to cart" button within the container
  31 |     const addButton = addItem.locator(this.addtocartButton);
  32 | 
  33 |     //Scroll down so it is visible on mobile screens
  34 |     await addButton.locator(this.addtocartButton).scrollIntoViewIfNeeded();
  35 | 
  36 |     // Wait for the button to be visible and ready to be clicked (helps reduce timeout issues)
  37 |     await expect(addButton).toBeVisible();
  38 | 
  39 |     await addButton.click();
  40 |   }
  41 | 
  42 |   async addMultipleItems(itemNames: string[]) {
  43 |     for (const name of itemNames) {
  44 |       // Locate the container and verify that it contains the expected name
  45 |       const addItems = this.inventoryItems.filter({ hasText: name });
  46 |       //Scroll down so it is visible on mobile screens
> 47 |       await addItems.locator(this.addtocartButton).scrollIntoViewIfNeeded();
     |                                                    ^ Error: locator.scrollIntoViewIfNeeded: Test timeout of 30000ms exceeded.
  48 | 
  49 |       await expect(addItems).toBeVisible();
  50 | 
  51 |       //Find the "Add to cart" button within the container and click it
  52 |       await addItems.locator(this.addtocartButton).click();
  53 |     }
  54 |   }
  55 | 
  56 |   //Remove a product from the inventory page
  57 |   async removeMultipleItems(itemNames: string) {
  58 |     const item = this.page.locator(".inventory_item", {
  59 |       hasText: itemNames,
  60 |     });
  61 | 
  62 |     // Target the button that has changed to "Remove"
  63 |     const removeButton = item.locator(this.removeButton);
  64 | 
  65 |     //Scroll down so it is visible on mobile screens
  66 |     await removeButton.locator(this.removeButton).scrollIntoViewIfNeeded();
  67 | 
  68 |     await expect(removeButton).toBeVisible();
  69 | 
  70 |     await removeButton.click();
  71 |   }
  72 | }
  73 | 
```