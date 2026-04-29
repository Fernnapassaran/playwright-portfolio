# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: inventory.spec.ts >> add multiple items success
- Location: tests\inventory.spec.ts:28:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /.*inventory.html/
Received string:  "https://www.saucedemo.com/"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    8 × unexpected value "https://www.saucedemo.com/"

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
  1  | import { test, expect } from "@playwright/test";
  2  | import { LoginPage } from "../pages/LoginPage";
  3  | import { InventoryPage } from "../pages/InventoryPage";
  4  | import testData from "../data/items.json";
  5  | 
  6  | test("add item once success", async ({ page }) => {
  7  |   //declare a variable
  8  |   const inventoryPage = new InventoryPage(page);
  9  | 
  10 |   //step 1 : Login
  11 |   //go to the web
  12 |   await page.goto("/");
  13 | 
  14 |   //Wait until we are on the inventory page (for Mobile stability)
  15 |   await expect(page).toHaveURL(/.*inventory.html/);
  16 | 
  17 |   //step 2 : Add to Cart
  18 |   await inventoryPage.addOnceItems(testData.singleItem);
  19 | 
  20 |   //verify button remove after add to cart
  21 |   await expect(inventoryPage.removeButton).toBeVisible();
  22 |   await expect(inventoryPage.removeButton).toHaveText("Remove");
  23 | 
  24 |   //step 3 : Verify number on the cart
  25 |   await expect(inventoryPage.shoppingCartBadge).toHaveText("1");
  26 | });
  27 | 
  28 | test("add multiple items success", async ({ page }) => {
  29 |   //declare a variable
  30 |   const inventoryPage = new InventoryPage(page);
  31 | 
  32 |   //go to the web
  33 |   await page.goto("/");
  34 |   //Wait until we are on the inventory page (for Mobile stability)
> 35 |   await expect(page).toHaveURL(/.*inventory.html/);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  36 | 
  37 |   //find the items
  38 |   // for (const item of items) {
  39 |   //   await page.locator(`[data-test="${item}"]`).click();
  40 |   // }
  41 |   await inventoryPage.addMultipleItems(testData.inventoryItems);
  42 | 
  43 |   // step 3 : Verify count number on the cart
  44 |   await expect(inventoryPage.shoppingCartBadge).toHaveText(
  45 |     testData.inventoryItems.length.toString(),
  46 |   );
  47 | });
  48 | 
```