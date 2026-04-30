# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: inventory.spec.ts >> add multiple items success
- Location: tests\inventory.spec.ts:27:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' }).locator('button:has-text("Add to cart")')

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
  18 |     this.inventoryItems = page.locator(".inventory_item");
  19 | 
  20 |     this.addtocartButton = page.locator(
  21 |       '[data-test="add-to-cart-sauce-labs-backpack"]',
  22 |     );
  23 |     this.removeButton = page.locator(
  24 |       '[data-test="remove-sauce-labs-backpack"]',
  25 |     );
  26 |   }
  27 | 
  28 |   //Action
  29 |   async addOnceItems(itemName: string) {
  30 |     // Find the product container by the given name
  31 |     const itemContainer = this.page.locator(".inventory_item", {
  32 |       hasText: itemName,
  33 |     });
  34 | 
  35 |     // Target the "Add to cart" button within the container
  36 |     const addButton = itemContainer.locator('button:has-text("Add to cart")');
  37 | 
  38 |     // Wait for the button to be visible and ready to be clicked (helps reduce timeout issues)
  39 |     await expect(addButton).toBeVisible();
  40 | 
  41 |     await addButton.click();
  42 |   }
  43 | 
  44 |   async addMultipleItems(itemNames: string[]) {
  45 |     for (const name of itemNames) {
  46 |       // Locate the container and verify that it contains the expected name
  47 |       const item = this.page.locator(".inventory_item", { hasText: name });
  48 | 
  49 |       // Find the "Add to cart" button within the container and click it
> 50 |       await item.locator('button:has-text("Add to cart")').click();
     |                                                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  51 |     }
  52 |   }
  53 | 
  54 |   // Remove a product from the inventory page
  55 |   async removeMultipleItems(itemName: string) {
  56 |     const itemContainer = this.page.locator(".inventory_item", {
  57 |       hasText: itemName,
  58 |     });
  59 |     // Target the button that has changed to "Remove"
  60 |     const removeButton = itemContainer.locator('button:has-text("Remove")');
  61 | 
  62 |     await expect(removeButton).toBeVisible();
  63 |     await removeButton.click();
  64 |   }
  65 | }
  66 | 
```