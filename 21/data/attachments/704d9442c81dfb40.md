# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.ts >> check out success
- Location: tests\checkout.spec.ts:8:5

# Error details

```
Error: locator.fill: value: expected string, got object
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
        - generic [ref=e14]: "1"
      - generic [ref=e16]: "Checkout: Your Information"
    - generic [ref=e19]:
      - generic [ref=e20]:
        - textbox "First Name" [ref=e22]
        - textbox "Last Name" [ref=e24]
        - textbox "Zip/Postal Code" [ref=e26]
      - generic [ref=e28]:
        - button "Go back Cancel" [ref=e29] [cursor=pointer]:
          - img "Go back" [ref=e30]
          - text: Cancel
        - button "Continue" [ref=e31] [cursor=pointer]
  - contentinfo [ref=e32]:
    - list [ref=e33]:
      - listitem [ref=e34]:
        - link "Twitter" [ref=e35] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e36]:
        - link "Facebook" [ref=e37] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e38]:
        - link "LinkedIn" [ref=e39] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e40]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { expect, type Locator, type Page } from "@playwright/test";
  2  | 
  3  | export class CheckoutPage {
  4  |   //declare a variable
  5  |   readonly page: Page;
  6  |   readonly firstNameInput: Locator;
  7  |   readonly lastNameInput: Locator;
  8  |   readonly zipCodeInput: Locator;
  9  |   readonly continueButton: Locator;
  10 |   readonly cancelButton: Locator;
  11 |   readonly checkOutButton: Locator;
  12 |   readonly cartButton: Locator;
  13 |   readonly finishButton: Locator;
  14 |   readonly checkOutSuccess: Locator;
  15 | 
  16 |   //Identify the locator
  17 |   constructor(page: Page) {
  18 |     this.page = page;
  19 | 
  20 |     //find locator cert
  21 |     this.cartButton = page.locator('[data-test="shopping-cart-link"]');
  22 | 
  23 |     //find locator check out button
  24 |     this.checkOutButton = page.locator('[data-test="checkout"]');
  25 | 
  26 |     //find locator first name
  27 |     this.firstNameInput = page.locator('[data-test="firstName"]');
  28 | 
  29 |     //find locator last name
  30 |     this.lastNameInput = page.locator('[data-test="lastName"]');
  31 | 
  32 |     //find locator zipcode
  33 |     this.zipCodeInput = page.locator('[data-test="postalCode"]');
  34 | 
  35 |     //find locator Continue button
  36 |     this.continueButton = page.locator('[data-test="continue"]');
  37 | 
  38 |     //find locator Cancel button
  39 |     this.cancelButton = page.locator('[data-test="cancel"]');
  40 | 
  41 |     //find locator finish button
  42 |     this.finishButton = page.locator('[data-test="finish"]');
  43 | 
  44 |     //find locator check out success
  45 |     this.checkOutSuccess = page.locator('[data-test="complete-header"]');
  46 |   }
  47 | 
  48 |   //Action
  49 |   async checkOutItem(firstname: string, lastname: string, zipcode: string) {
  50 |     //Tap cart
  51 |     await this.cartButton.isVisible();
  52 |     await this.cartButton.click();
  53 | 
  54 |     //Tap check out button
  55 |     await this.checkOutButton.scrollIntoViewIfNeeded();
  56 |     await this.checkOutButton.isVisible();
  57 |     await this.checkOutButton.click();
  58 | 
  59 |     //input firstname, lastname, zipcode
> 60 |     await this.firstNameInput.fill(firstname);
     |                               ^ Error: locator.fill: value: expected string, got object
  61 |     await this.lastNameInput.fill(lastname);
  62 |     await this.zipCodeInput.fill(zipcode);
  63 | 
  64 |     //tap button
  65 |     await this.continueButton.scrollIntoViewIfNeeded();
  66 |     await this.continueButton.isVisible();
  67 |     await this.continueButton.click();
  68 | 
  69 |     await this.finishButton.scrollIntoViewIfNeeded();
  70 |     await this.finishButton.isVisible();
  71 |     await this.finishButton.click();
  72 |   }
  73 | 
  74 |   async completeOrder() {
  75 |     await this.finishButton.scrollIntoViewIfNeeded();
  76 |     await this.finishButton.isVisible();
  77 |     await this.finishButton.click();
  78 | 
  79 |     // Check text success
  80 |     await this.checkOutSuccess.scrollIntoViewIfNeeded();
  81 |     await expect(this.checkOutSuccess).toBeVisible();
  82 |     await expect(this.checkOutSuccess).toHaveText("Thank you for your order!");
  83 |   }
  84 | }
  85 | 
```