# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: inventory.spec.ts >> add item once success
- Location: tests\inventory.spec.ts:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-test="inventory-item"]').filter({ hasText: 'Sauce Labs Backpack' }).locator(locator('button:has-text("Add to cart")'))

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
  18 |     this.inventoryItems = page.locator('[data-test="inventory-item"]');
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
  33 |     // Use force: true to bypass any remaining interception issues in Safari
> 34 |     await addButton.click({ force: true });
     |                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  35 |   }
  36 | 
  37 |   async addMultipleItems(itemNames: string[]) {
  38 |     for (const name of itemNames) {
  39 |       // Locate the container and verify that it contains the expected name
  40 |       const addItems = this.inventoryItems.filter({ hasText: name });
  41 | 
  42 |       //Find the "Add to cart" button within the container and click it
  43 |       await addItems.locator(this.addtocartButton).click({ force: true });
  44 |     }
  45 |   }
  46 | 
  47 |   //Remove a product from the inventory page
  48 |   async removeMultipleItems(itemNames: string) {
  49 |     const item = this.page.locator(".inventory_item", {
  50 |       hasText: itemNames,
  51 |     });
  52 |     // Target the button that has changed to "Remove"
  53 |     const removeButton = item.locator(this.removeButton);
  54 | 
  55 |     // Use force: true to bypass any remaining interception issues in Safari
  56 |     await removeButton.click({ force: true });
  57 |   }
  58 | 
  59 |   async removeOnceItems(itemName: string) {
  60 |     // Find the product container by the given name
  61 |     const addItem = this.inventoryItems.filter({ hasText: itemName });
  62 | 
  63 |     // Target the button that has changed to "Remove"
  64 |     const remove = addItem.locator(this.removeButton);
  65 | 
  66 |     // Use force: true to bypass any remaining interception issues in Safari
  67 |     await this.removeButton.click({ force: true });
  68 |   }
  69 | 
  70 |   //Verify the button state changes back for the selected item.
  71 |   getItemButton(itemName: string) {
  72 |     return this.inventoryItems
  73 |       .filter({ hasText: itemName })
  74 |       .getByRole("button");
  75 |   }
  76 | }
  77 | 
```