# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: inventory.spec.ts >> add multiple items and remove all items success
- Location: tests\inventory.spec.ts:75:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('button:has-text("Remove")')
Expected: visible
Error: strict mode violation: locator('button:has-text("Remove")') resolved to 4 elements:
    1) <button id="remove-sauce-labs-backpack" name="remove-sauce-labs-backpack" data-test="remove-sauce-labs-backpack" class="btn btn_secondary btn_small btn_inventory ">Remove</button> aka locator('[data-test="remove-sauce-labs-backpack"]')
    2) <button id="remove-sauce-labs-bike-light" name="remove-sauce-labs-bike-light" data-test="remove-sauce-labs-bike-light" class="btn btn_secondary btn_small btn_inventory ">Remove</button> aka locator('[data-test="remove-sauce-labs-bike-light"]')
    3) <button id="remove-sauce-labs-bolt-t-shirt" name="remove-sauce-labs-bolt-t-shirt" data-test="remove-sauce-labs-bolt-t-shirt" class="btn btn_secondary btn_small btn_inventory ">Remove</button> aka locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')
    4) <button id="remove-sauce-labs-fleece-jacket" name="remove-sauce-labs-fleece-jacket" data-test="remove-sauce-labs-fleece-jacket" class="btn btn_secondary btn_small btn_inventory ">Remove</button> aka locator('[data-test="remove-sauce-labs-fleece-jacket"]')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('button:has-text("Remove")')

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
        - generic [ref=e18] [cursor=pointer]:
          - generic [ref=e19]: Name (A to Z)
          - combobox [ref=e20]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e24]:
      - generic [ref=e25]:
        - link "Sauce Labs Backpack" [ref=e27]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e28]
        - generic [ref=e29]:
          - generic [ref=e30]:
            - link "Sauce Labs Backpack" [ref=e31]:
              - /url: "#"
              - generic [ref=e32]: Sauce Labs Backpack
            - generic [ref=e33]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e34]:
            - generic [ref=e35]: $29.99
            - button "Remove" [ref=e36] [cursor=pointer]
      - generic [ref=e37]:
        - link "Sauce Labs Bike Light" [ref=e39]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e40]
        - generic [ref=e41]:
          - generic [ref=e42]:
            - link "Sauce Labs Bike Light" [ref=e43]:
              - /url: "#"
              - generic [ref=e44]: Sauce Labs Bike Light
            - generic [ref=e45]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e46]:
            - generic [ref=e47]: $9.99
            - button "Remove" [ref=e48] [cursor=pointer]
      - generic [ref=e49]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e51]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e52]
        - generic [ref=e53]:
          - generic [ref=e54]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e55]:
              - /url: "#"
              - generic [ref=e56]: Sauce Labs Bolt T-Shirt
            - generic [ref=e57]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e58]:
            - generic [ref=e59]: $15.99
            - button "Remove" [ref=e60] [cursor=pointer]
      - generic [ref=e61]:
        - link "Sauce Labs Fleece Jacket" [ref=e63]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e64]
        - generic [ref=e65]:
          - generic [ref=e66]:
            - link "Sauce Labs Fleece Jacket" [ref=e67]:
              - /url: "#"
              - generic [ref=e68]: Sauce Labs Fleece Jacket
            - generic [ref=e69]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e70]:
            - generic [ref=e71]: $49.99
            - button "Remove" [ref=e72] [cursor=pointer]
      - generic [ref=e73]:
        - link "Sauce Labs Onesie" [ref=e75]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e76]
        - generic [ref=e77]:
          - generic [ref=e78]:
            - link "Sauce Labs Onesie" [ref=e79]:
              - /url: "#"
              - generic [ref=e80]: Sauce Labs Onesie
            - generic [ref=e81]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e82]:
            - generic [ref=e83]: $7.99
            - button "Add to cart" [ref=e84] [cursor=pointer]
      - generic [ref=e85]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e87]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e88]
        - generic [ref=e89]:
          - generic [ref=e90]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e91]:
              - /url: "#"
              - generic [ref=e92]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e93]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e94]:
            - generic [ref=e95]: $15.99
            - button "Add to cart" [ref=e96] [cursor=pointer]
  - contentinfo [ref=e97]:
    - list [ref=e98]:
      - listitem [ref=e99]:
        - link "Twitter" [ref=e100]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e101]:
        - link "Facebook" [ref=e102]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e103]:
        - link "LinkedIn" [ref=e104]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e105]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | import { LoginPage } from "../pages/LoginPage";
  3   | import { InventoryPage } from "../pages/InventoryPage";
  4   | import testData from "../data/items.json";
  5   | 
  6   | test("add item once success", async ({ page }) => {
  7   |   //declare a variable
  8   |   const loginPage = new LoginPage(page);
  9   |   const inventoryPage = new InventoryPage(page);
  10  | 
  11  |   //step 1 : Login
  12  |   //go to the web
  13  |   await page.goto("/inventory.html");
  14  |   await expect(page).toHaveURL(/.*inventory.html/);
  15  | 
  16  |   //step 2 : Add to Cart
  17  |   await inventoryPage.addOnceItems(testData.singleItem);
  18  | 
  19  |   //verify button remove after add to cart
  20  |   await expect(inventoryPage.removeButton).toBeVisible();
  21  |   await expect(inventoryPage.removeButton).toHaveText("Remove");
  22  | 
  23  |   //step 3 : Verify number on the cart
  24  |   await expect(inventoryPage.shoppingCartBadge).toHaveText("1");
  25  | });
  26  | 
  27  | test("add multiple items success", async ({ page }) => {
  28  |   //declare a variable
  29  |   const loginPage = new LoginPage(page);
  30  |   const inventoryPage = new InventoryPage(page);
  31  | 
  32  |   //go to the web
  33  |   await page.goto("/inventory.html");
  34  |   await expect(page).toHaveURL(/.*inventory.html/);
  35  | 
  36  |   //find the items
  37  |   // for (const item of items) {
  38  |   //   await page.locator(`[data-test="${item}"]`).click();
  39  |   // }
  40  |   await inventoryPage.addMultipleItems(testData.inventoryItems);
  41  | 
  42  |   // step 3 : Verify count number on the cart
  43  |   await expect(inventoryPage.shoppingCartBadge).toHaveText(
  44  |     testData.inventoryItems.length.toString(),
  45  |   );
  46  | });
  47  | 
  48  | test("add item and remove success", async ({ page }) => {
  49  |   //declare a variable
  50  |   const loginPage = new LoginPage(page);
  51  |   const inventoryPage = new InventoryPage(page);
  52  | 
  53  |   //step 1 : Login
  54  |   //go to the web
  55  |   await page.goto("/inventory.html");
  56  |   await expect(page).toHaveURL(/.*inventory.html/);
  57  | 
  58  |   //step 2 : Add to Cart
  59  |   await inventoryPage.addOnceItems(testData.singleItem);
  60  | 
  61  |   //step 3 : Remove to Cart
  62  |   await expect(inventoryPage.removeButton).toBeVisible();
  63  |   await expect(inventoryPage.removeButton).toHaveText("Remove");
  64  |   await inventoryPage.removeOnceItems(testData.singleItem);
  65  | 
  66  |   //step 4 : Verify that the button text for this specific item changes back to "Add to cart"
  67  |   await expect(inventoryPage.getItemButton(testData.singleItem)).toHaveText(
  68  |     "Add to cart",
  69  |   );
  70  | 
  71  |   //step 5 : The badge is removed from the UI when the cart is empty, so we check if it is hidden.
  72  |   await expect(inventoryPage.shoppingCartBadge).toBeHidden();
  73  | });
  74  | 
  75  | test("add multiple items and remove all items success", async ({ page }) => {
  76  |   //declare a variable
  77  |   const loginPage = new LoginPage(page);
  78  |   const inventoryPage = new InventoryPage(page);
  79  | 
  80  |   //step 1 : Login
  81  |   //go to the web
  82  |   await page.goto("/inventory.html");
  83  |   await expect(page).toHaveURL(/.*inventory.html/);
  84  | 
  85  |   //step 2 : Add to Cart
  86  |   await inventoryPage.addMultipleItems(testData.inventoryItems);
  87  | 
  88  |   //step 3 : Remove to Cart
> 89  |   await expect(inventoryPage.removeButton).toBeVisible();
      |                                            ^ Error: expect(locator).toBeVisible() failed
  90  |   await expect(inventoryPage.removeButton).toHaveText("Remove");
  91  |   await inventoryPage.removeMultipleItems(testData.inventoryItems);
  92  | 
  93  |   //step 4 : Verify that the button text for this specific item changes back to "Add to cart"
  94  |   //use a loop to check every item in the array
  95  |   for (const itemName of testData.inventoryItems) {
  96  |     const itemButton = inventoryPage.getItemButton(itemName);
  97  |     await expect(itemButton).toHaveText("Add to cart");
  98  |   }
  99  | 
  100 |   //step 5 : The badge is removed from the UI when the cart is empty, so we check if it is hidden.
  101 |   await expect(inventoryPage.shoppingCartBadge).toBeHidden();
  102 | });
  103 | 
```