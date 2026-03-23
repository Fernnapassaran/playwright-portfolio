import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test("add item once success", async ({ page }) => {
  //declare a variable
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  //step 1 : Login
  //go to the web
  await page.goto("https://www.saucedemo.com/inventory.html");

  //step 2 : Add to Cart
  await inventoryPage.addItemTocart();
  //verify button remove after add to cart
  await expect(inventoryPage.removeButton).toBeVisible();
  await expect(inventoryPage.removeButton).toHaveText("Remove");

  //step 3 : Verify number on the cart
  await expect(inventoryPage.shoppingCartBadge).toHaveText("1");
  
});

test("add multiple items success", async ({ page }) => {
  //declare a variable
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  //declare locator button add to cart
   const items = [
    'add-to-cart-sauce-labs-backpack',
    'add-to-cart-sauce-labs-bike-light',
    'add-to-cart-sauce-labs-bolt-t-shirt'
  ];

  //go to the web
  await page.goto("https://www.saucedemo.com/inventory.html");

  //find the items
  for (const item of items) {
    await page.locator(`[data-test="${item}"]`).click();
  }

  // step 3 : Verify number = 3 on the cart
  await expect(inventoryPage.shoppingCartBadge).toHaveText(items.length.toString());

});
