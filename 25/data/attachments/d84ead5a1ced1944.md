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
      - generic [ref=e10]:
        - textbox "Username" [ref=e11]
        - img [ref=e12]
      - generic [ref=e14]:
        - textbox "Password" [ref=e15]
        - img [ref=e16]
      - 'heading "Epic sadface: You can only access ''/inventory.html'' when you are logged in." [level=3] [ref=e19]':
        - button [ref=e20] [cursor=pointer]:
          - img [ref=e21]
        - text: "Epic sadface: You can only access '/inventory.html' when you are logged in."
      - button "Login" [ref=e23] [cursor=pointer]
    - generic [ref=e25]:
      - generic [ref=e26]:
        - heading "Accepted usernames are:" [level=4] [ref=e27]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e28]:
        - heading "Password for all users:" [level=4] [ref=e29]
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
> 33 |     await addButton.click({ force: true });
     |                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  34 |   }
  35 | 
  36 |   async addMultipleItems(itemNames: string[]) {
  37 |     for (const name of itemNames) {
  38 |       // Locate the container and verify that it contains the expected name
  39 |       const addItems = this.inventoryItems.filter({ hasText: name });
  40 | 
  41 |       //Find the "Add to cart" button within the container and click it
  42 |       await addItems.locator(this.addtocartButton).click({ force: true });
  43 |     }
  44 |   }
  45 | 
  46 |   //Remove a product from the inventory page
  47 |   async removeMultipleItems(itemNames: string) {
  48 |     const item = this.page.locator(".inventory_item", {
  49 |       hasText: itemNames,
  50 |     });
  51 |     // Target the button that has changed to "Remove"
  52 |     const removeButton = item.locator(this.removeButton);
  53 | 
  54 |     await removeButton.click({ force: true });
  55 |   }
  56 | }
  57 | 
```