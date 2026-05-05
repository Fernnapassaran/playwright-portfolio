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
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://www.saucedemo.com/inventory.html", waiting until "load"

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
> 13 |   await page.goto("/inventory.html");
     |              ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
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
  24 | });
  25 | 
  26 | test("add multiple items success", async ({ page }) => {
  27 |   //declare a variable
  28 |   const loginPage = new LoginPage(page);
  29 |   const inventoryPage = new InventoryPage(page);
  30 | 
  31 |   //go to the web
  32 |   await page.goto("/inventory.html");
  33 | 
  34 |   //find the items
  35 |   // for (const item of items) {
  36 |   //   await page.locator(`[data-test="${item}"]`).click();
  37 |   // }
  38 |   await inventoryPage.addMultipleItems(testData.inventoryItems);
  39 | 
  40 |   // step 3 : Verify count number on the cart
  41 |   await expect(inventoryPage.shoppingCartBadge).toHaveText(
  42 |     testData.inventoryItems.length.toString(),
  43 |   );
  44 | });
  45 | 
  46 | test("add item and remove success", async ({ page }) => {
  47 |   //declare a variable
  48 |   const loginPage = new LoginPage(page);
  49 |   const inventoryPage = new InventoryPage(page);
  50 | 
  51 |   //step 1 : Login
  52 |   //go to the web
  53 |   await page.goto("/inventory.html");
  54 | 
  55 |   //step 2 : Add to Cart
  56 |   await inventoryPage.addOnceItems(testData.singleItem);
  57 | 
  58 |   //step 3 : Remove to Cart
  59 |   await expect(inventoryPage.removeButton).toBeVisible();
  60 |   await expect(inventoryPage.removeButton).toHaveText("Remove");
  61 |   await inventoryPage.removeOnceItems(testData.singleItem);
  62 | 
  63 |   //step 4 : Verify that the button text for this specific item changes back to "Add to cart"
  64 |   await expect(inventoryPage.getItemButton(testData.singleItem)).toHaveText(
  65 |     "Add to cart",
  66 |   );
  67 | 
  68 |   //step 5 : The badge is removed from the UI when the cart is empty, so we check if it is hidden.
  69 |   await expect(inventoryPage.shoppingCartBadge).toBeHidden();
  70 | });
  71 | 
```