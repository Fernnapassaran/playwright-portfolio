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
Error: locator.scrollIntoViewIfNeeded: Test timeout of 30000ms exceeded.
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
  10 |   addButton: any;
  11 | 
  12 |   //Identify the locator
  13 |   constructor(page: Page) {
  14 |     this.page = page;
  15 | 
  16 |     //find number shoppingCartBadge after add to cart and show remove button
  17 |     this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
  18 | 
  19 |     this.inventoryItems = page.locator(".inventory_item");
  20 | 
  21 |     this.addtocartButton = page.locator(
  22 |       '[data-test="add-to-cart-sauce-labs-backpack"]',
  23 |     );
  24 |     this.removeButton = page.locator(
  25 |       '[data-test="remove-sauce-labs-backpack"]',
  26 |     );
  27 |   }
  28 | 
  29 |   //Action
  30 |   async addOnceItems(itemName: string) {
  31 |     // Find the product container by the given name
  32 |     const itemContainer = this.page.locator(".inventory_item", {
  33 |       hasText: itemName,
  34 |     });
  35 |     //Scroll down so it is visible on mobile screens
  36 |     await itemContainer
  37 |       .locator('button:has-text("Add to cart")')
  38 |       .scrollIntoViewIfNeeded();
  39 | 
  40 |     // Target the "Add to cart" button within the container
  41 |     const addButton = itemContainer.locator('button:has-text("Add to cart")');
  42 | 
  43 |     // Wait for the button to be visible and ready to be clicked (helps reduce timeout issues)
  44 |     await expect(addButton).toBeVisible();
  45 | 
  46 |     await addButton.click();
  47 |   }
  48 | 
  49 |   async addMultipleItems(itemNames: string[]) {
  50 |     for (const name of itemNames) {
  51 |       // Locate the container and verify that it contains the expected name
  52 |       const item = this.page.locator(".inventory_item", { hasText: name });
  53 |       //Scroll down so it is visible on mobile screens
  54 |       await item
  55 |         .locator('button:has-text("Add to cart")')
> 56 |         .scrollIntoViewIfNeeded();
     |          ^ Error: locator.scrollIntoViewIfNeeded: Test timeout of 30000ms exceeded.
  57 | 
  58 |       // Find the "Add to cart" button within the container and click it
  59 |       await item.locator('button:has-text("Add to cart")').click();
  60 |     }
  61 |   }
  62 | 
  63 |   // Remove a product from the inventory page
  64 |   async removeMultipleItems(itemName: string) {
  65 |     const itemContainer = this.page.locator(".inventory_item", {
  66 |       hasText: itemName,
  67 |     });
  68 | 
  69 |     // Target the button that has changed to "Remove"
  70 |     const removeButton = itemContainer.locator('button:has-text("Remove")');
  71 | 
  72 |     //Scroll down so it is visible on mobile screens
  73 |     await removeButton
  74 |       .locator('button:has-text("Remove")')
  75 |       .scrollIntoViewIfNeeded();
  76 | 
  77 |     await expect(removeButton).toBeVisible();
  78 | 
  79 |     await removeButton.click();
  80 |   }
  81 | }
  82 | 
```