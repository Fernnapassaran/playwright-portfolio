# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: inventory.spec.ts >> add multiple items success
- Location: tests\inventory.spec.ts:26:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' })

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
  30 |     //Scroll down so it is visible on mobile screens
  31 |     //await addItem.locator(this.addtocartButton).scrollIntoViewIfNeeded();
  32 | 
  33 |     // Target the "Add to cart" button within the container
  34 |     const addButton = addItem.locator(this.addtocartButton);
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
  47 |       //await addItems.locator(this.addtocartButton).scrollIntoViewIfNeeded();
  48 | 
> 49 |       await expect(addItems).toBeVisible();
     |                              ^ Error: expect(locator).toBeVisible() failed
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
  66 |     //await removeButton.locator(this.removeButton).scrollIntoViewIfNeeded();
  67 | 
  68 |     await expect(removeButton).toBeVisible();
  69 | 
  70 |     await removeButton.click();
  71 |   }
  72 | }
  73 | 
```