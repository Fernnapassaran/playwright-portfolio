# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: inventory.spec.ts >> add item once success
- Location: tests\inventory.spec.ts:6:5

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
  8  |   const loginPage = new LoginPage(page);
  9  |   const inventoryPage = new InventoryPage(page);
  10 | 
  11 |   //step 1 : Login
  12 |   //go to the web
  13 |   await page.goto("/");
  14 |   //If the URL is still the login page, perform login แปล
  15 |   //if (page.url() === "https://www.saucedemo.com/") {
  16 |   // You can use your LoginPage class here
  17 |   //await loginPage.login("standard_user", "secret_sauce");
  18 |   //}
  19 | 
  20 |   // 💡 Add this: Wait until we are on the inventory page (for Mobile stability)
> 21 |   await expect(page).toHaveURL(/.*inventory.html/);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  22 | 
  23 |   //step 2 : Add to Cart
  24 |   await inventoryPage.addOnceItems(testData.singleItem);
  25 | 
  26 |   //verify button remove after add to cart
  27 |   await expect(inventoryPage.removeButton).toBeVisible();
  28 |   await expect(inventoryPage.removeButton).toHaveText("Remove");
  29 | 
  30 |   //step 3 : Verify number on the cart
  31 |   await expect(inventoryPage.shoppingCartBadge).toHaveText("1");
  32 | });
  33 | 
  34 | test("add multiple items success", async ({ page }) => {
  35 |   //declare a variable
  36 |   const loginPage = new LoginPage(page);
  37 |   const inventoryPage = new InventoryPage(page);
  38 | 
  39 |   //go to the web
  40 |   await page.goto("/");
  41 | 
  42 |   await expect(page).toHaveURL(/.*inventory.html/);
  43 | 
  44 |   //find the items
  45 |   // for (const item of items) {
  46 |   //   await page.locator(`[data-test="${item}"]`).click();
  47 |   // }
  48 |   await inventoryPage.addMultipleItems(testData.inventoryItems);
  49 | 
  50 |   // step 3 : Verify count number on the cart
  51 |   await expect(inventoryPage.shoppingCartBadge).toHaveText(
  52 |     testData.inventoryItems.length.toString(),
  53 |   );
  54 | });
  55 | 
```