import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { CartPage } from "../pages/CartPage";
import testData from "../data/items.json";

test("remove 1 item from add 1 success", async ({ page }) => {
  //declare a variable
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);
  const cartPage = new CartPage(page);

  //step 1 : Login
  //go to the web
  await page.goto('/inventory.html');

  //step 2 : Add to Cart
  await inventoryPage.addOnceItems(testData.singleItem);

  //step 2.5 : go to page cart
  await cartPage.cartButton.click();

  //step 3 : verify have item in cart
  await expect(cartPage.cartButton).toHaveCount(1);

  //step 4 : remove item
  await cartPage.removeButton.click();

  //step 5 : Verify that the cart badge is hidden (meaning count is 0)
  await expect(cartPage.cartButton).toHaveText("");
});

test("remove 4 item from 4 cart success", async ({ page }) => {
  //declare a variable
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);
  const cartPage = new CartPage(page);

  //step 1 : Login
  //go to the web
  await page.goto('/inventory.html');

  //step 2 : Add to Cart
  await inventoryPage.addMultipleItems(testData.inventoryItems);

  //step 2.5 : go to page cart
  await cartPage.cartButton.click();

  //step 3 : verify have item in cart
  await expect(cartPage.cartButton).toHaveText(
    testData.inventoryItems.length.toString(),
  );

  //step 4 : remove item
  await cartPage.removeMultipleItems(testData.inventoryItems);

  //step 5 : Verify that the cart badge is hidden (meaning count is 0)
  await expect(cartPage.cartButton).toHaveText("");
  
});
