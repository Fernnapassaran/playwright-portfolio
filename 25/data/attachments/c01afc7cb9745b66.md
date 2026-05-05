# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: inventory.spec.ts >> add multiple items success
- Location: tests\inventory.spec.ts:26:5

# Error details

```
Error: Playwright Test did not expect test() to be called here.
Most common reasons include:
- You are calling test() in a configuration file.
- You are calling test() in a file that is imported by the configuration file.
- You have two different versions of @playwright/test. This usually happens
  when one of the dependencies in your package.json depends on @playwright/test.
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
        - generic [ref=e14]: "4"
      - generic [ref=e15]:
        - generic [ref=e16]: Products
        - combobox [ref=e19]:
          - option "Name (A to Z)" [selected]
          - option "Name (Z to A)"
          - option "Price (low to high)"
          - option "Price (high to low)"
    - generic [ref=e23]:
      - generic [ref=e24]:
        - link "Sauce Labs Backpack" [ref=e26]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e27]
        - generic [ref=e28]:
          - generic [ref=e29]:
            - link "Sauce Labs Backpack" [ref=e30]:
              - /url: "#"
              - generic [ref=e31]: Sauce Labs Backpack
            - generic [ref=e32]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e33]:
            - generic [ref=e34]: $29.99
            - button "Remove" [ref=e35] [cursor=pointer]
      - generic [ref=e36]:
        - link "Sauce Labs Bike Light" [ref=e38]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e39]
        - generic [ref=e40]:
          - generic [ref=e41]:
            - link "Sauce Labs Bike Light" [ref=e42]:
              - /url: "#"
              - generic [ref=e43]: Sauce Labs Bike Light
            - generic [ref=e44]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e45]:
            - generic [ref=e46]: $9.99
            - button "Remove" [ref=e47] [cursor=pointer]
      - generic [ref=e48]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e50]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e51]
        - generic [ref=e52]:
          - generic [ref=e53]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e54]:
              - /url: "#"
              - generic [ref=e55]: Sauce Labs Bolt T-Shirt
            - generic [ref=e56]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e57]:
            - generic [ref=e58]: $15.99
            - button "Remove" [ref=e59] [cursor=pointer]
      - generic [ref=e60]:
        - link "Sauce Labs Fleece Jacket" [ref=e62]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e63]
        - generic [ref=e64]:
          - generic [ref=e65]:
            - link "Sauce Labs Fleece Jacket" [ref=e66]:
              - /url: "#"
              - generic [ref=e67]: Sauce Labs Fleece Jacket
            - generic [ref=e68]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e69]:
            - generic [ref=e70]: $49.99
            - button "Remove" [ref=e71] [cursor=pointer]
      - generic [ref=e72]:
        - link "Sauce Labs Onesie" [ref=e74]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e75]
        - generic [ref=e76]:
          - generic [ref=e77]:
            - link "Sauce Labs Onesie" [ref=e78]:
              - /url: "#"
              - generic [ref=e79]: Sauce Labs Onesie
            - generic [ref=e80]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e81]:
            - generic [ref=e82]: $7.99
            - button "Add to cart" [ref=e83] [cursor=pointer]
      - generic [ref=e84]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e86]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e87]
        - generic [ref=e88]:
          - generic [ref=e89]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e90]:
              - /url: "#"
              - generic [ref=e91]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e92]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e93]:
            - generic [ref=e94]: $15.99
            - button "Add to cart" [ref=e95] [cursor=pointer]
  - contentinfo [ref=e96]:
    - list [ref=e97]:
      - listitem [ref=e98]:
        - link "Twitter" [ref=e99]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e100]:
        - link "Facebook" [ref=e101]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e102]:
        - link "LinkedIn" [ref=e103]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e104]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
  44 | 
> 45 |   test("add item and remove success", async ({ page }) => {
     |       ^ Error: Playwright Test did not expect test() to be called here.
  46 |     //declare a variable
  47 |     const loginPage = new LoginPage(page);
  48 |     const inventoryPage = new InventoryPage(page);
  49 | 
  50 |     //step 1 : Login
  51 |     //go to the web
  52 |     await page.goto("/inventory.html");
  53 | 
  54 |     //step 2 : Add to Cart
  55 |     await inventoryPage.addOnceItems(testData.singleItem);
  56 | 
  57 |     //step 3 : Remove to Cart
  58 |     await expect(inventoryPage.removeButton).toBeVisible();
  59 |     await expect(inventoryPage.removeButton).toHaveText("Remove");
  60 |     await inventoryPage.removeOnceItems(testData.singleItem);
  61 | 
  62 |     //verify button remove after add to cart
  63 |     await expect(inventoryPage.addtocartButton).toBeVisible();
  64 |     await expect(inventoryPage.addtocartButton).toHaveText("Add to cart");
  65 | 
  66 |     //step 3 : Verify number on the cart
  67 |     await expect(inventoryPage.shoppingCartBadge).toHaveText("0");
  68 |   });
  69 | });
  70 | 
```