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
Error: locator.scrollIntoViewIfNeeded: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' }).locator(locator('button:has-text("Add to cart")')).locator(locator('button:has-text("Add to cart")'))

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
  30 |     // Target the "Add to cart" button within the container
  31 |     const addButton = addItem.locator(this.addtocartButton);
  32 | 
  33 |     //Scroll down so it is visible on mobile screens
> 34 |     await addButton.locator(this.addtocartButton).scrollIntoViewIfNeeded();
     |                                                   ^ Error: locator.scrollIntoViewIfNeeded: Test timeout of 30000ms exceeded.
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
  47 |       await addItems.locator(this.addtocartButton).scrollIntoViewIfNeeded();
  48 | 
  49 |       await expect(addItems).toBeVisible();
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
  66 |     await removeButton.locator(this.removeButton).scrollIntoViewIfNeeded();
  67 | 
  68 |     await expect(removeButton).toBeVisible();
  69 | 
  70 |     await removeButton.click();
  71 |   }
  72 | }
  73 | 
```