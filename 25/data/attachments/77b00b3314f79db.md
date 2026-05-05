# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: inventory.spec.ts >> add item and remove success
- Location: tests\inventory.spec.ts:46:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('[data-test="shopping-cart-badge"]')
Expected: "0"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('[data-test="shopping-cart-badge"]')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
      - generic [ref=e14]:
        - generic [ref=e15]: Products
        - combobox [ref=e18]:
          - option "Name (A to Z)" [selected]
          - option "Name (Z to A)"
          - option "Price (low to high)"
          - option "Price (high to low)"
    - generic [ref=e22]:
      - generic [ref=e23]:
        - link "Sauce Labs Backpack" [ref=e25]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e26]
        - generic [ref=e27]:
          - generic [ref=e28]:
            - link "Sauce Labs Backpack" [ref=e29]:
              - /url: "#"
              - generic [ref=e30]: Sauce Labs Backpack
            - generic [ref=e31]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e32]:
            - generic [ref=e33]: $29.99
            - button "Add to cart" [ref=e34] [cursor=pointer]
      - generic [ref=e35]:
        - link "Sauce Labs Bike Light" [ref=e37]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e38]
        - generic [ref=e39]:
          - generic [ref=e40]:
            - link "Sauce Labs Bike Light" [ref=e41]:
              - /url: "#"
              - generic [ref=e42]: Sauce Labs Bike Light
            - generic [ref=e43]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e44]:
            - generic [ref=e45]: $9.99
            - button "Add to cart" [ref=e46] [cursor=pointer]
      - generic [ref=e47]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e49]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e50]
        - generic [ref=e51]:
          - generic [ref=e52]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e53]:
              - /url: "#"
              - generic [ref=e54]: Sauce Labs Bolt T-Shirt
            - generic [ref=e55]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e56]:
            - generic [ref=e57]: $15.99
            - button "Add to cart" [ref=e58] [cursor=pointer]
      - generic [ref=e59]:
        - link "Sauce Labs Fleece Jacket" [ref=e61]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e62]
        - generic [ref=e63]:
          - generic [ref=e64]:
            - link "Sauce Labs Fleece Jacket" [ref=e65]:
              - /url: "#"
              - generic [ref=e66]: Sauce Labs Fleece Jacket
            - generic [ref=e67]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e68]:
            - generic [ref=e69]: $49.99
            - button "Add to cart" [ref=e70] [cursor=pointer]
      - generic [ref=e71]:
        - link "Sauce Labs Onesie" [ref=e73]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e74]
        - generic [ref=e75]:
          - generic [ref=e76]:
            - link "Sauce Labs Onesie" [ref=e77]:
              - /url: "#"
              - generic [ref=e78]: Sauce Labs Onesie
            - generic [ref=e79]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e80]:
            - generic [ref=e81]: $7.99
            - button "Add to cart" [ref=e82] [cursor=pointer]
      - generic [ref=e83]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e85]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e86]
        - generic [ref=e87]:
          - generic [ref=e88]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e89]:
              - /url: "#"
              - generic [ref=e90]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e91]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e92]:
            - generic [ref=e93]: $15.99
            - button "Add to cart" [ref=e94] [cursor=pointer]
  - contentinfo [ref=e95]:
    - list [ref=e96]:
      - listitem [ref=e97]:
        - link "Twitter" [ref=e98]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e99]:
        - link "Facebook" [ref=e100]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e101]:
        - link "LinkedIn" [ref=e102]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e103]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
  13 |   await page.goto("/inventory.html");
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
  63 |   //verify button remove after add to cart
  64 |   //await expect(inventoryPage.addtocartButton).toBeVisible();
  65 |   await expect(inventoryPage.getItemButton(testData.singleItem)).toHaveText(
  66 |     "Add to cart",
  67 |   );
  68 | 
  69 |   //step 3 : Verify number on the cart
> 70 |   await expect(inventoryPage.shoppingCartBadge).toHaveText("0");
     |                                                 ^ Error: expect(locator).toHaveText(expected) failed
  71 | });
  72 | 
```