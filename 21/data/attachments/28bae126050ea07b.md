# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: inventory.spec.ts >> add item once success
- Location: tests\inventory.spec.ts:6:5

# Error details

```
Error: page.goto: url: expected string, got undefined
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { LoginPage } from "../pages/LoginPage";
  3  | import { InventoryPage } from "../pages/InventoryPage";
  4  | import testData from "../data/items.json";
  5  | 
  6  | test("add item once success", async ({ page }) => {
  7  |   //declare a variable
  8  |   const loginPage = new LoginPage(page);
  9  |   const inventoryPage = new InventoryPage(page);
  10 | 
  11 |   //step 1 : Login
  12 |   //go to the web
> 13 |   await page.goto();
     |              ^ Error: page.goto: url: expected string, got undefined
  14 | 
  15 |   //step 2 : Add to Cart
  16 |   await inventoryPage.addOnceItems(testData.singleItem);
  17 | 
  18 |   //verify button remove after add to cart
  19 |   await expect(inventoryPage.removeButton).toBeVisible();
  20 |   await expect(inventoryPage.removeButton).toHaveText("Remove");
  21 | 
  22 |   //step 3 : Verify number on the cart
  23 |   await expect(inventoryPage.shoppingCartBadge).toHaveText("1");
  24 |   
  25 | });
  26 | 
  27 | test("add multiple items success", async ({ page }) => {
  28 |   //declare a variable
  29 |   const loginPage = new LoginPage(page);
  30 |   const inventoryPage = new InventoryPage(page);
  31 |   
  32 |   //go to the web
  33 |   await page.goto('/inventory.html');
  34 | 
  35 |   //find the items
  36 |   // for (const item of items) {
  37 |   //   await page.locator(`[data-test="${item}"]`).click();
  38 |   // }
  39 |   await inventoryPage.addMultipleItems(testData.inventoryItems);
  40 | 
  41 |   // step 3 : Verify count number on the cart
  42 |   await expect(inventoryPage.shoppingCartBadge).toHaveText(
  43 |     testData.inventoryItems.length.toString(),
  44 |   );
  45 | });
  46 | 
```