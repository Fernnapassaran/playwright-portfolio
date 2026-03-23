import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CheckoutPage } from "../pages/CheckoutPage";

test("check out success", async ({ page }) => {
  //declare a variable
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);

  //step 1 : Login
  //go to the web
  await page.goto("https://www.saucedemo.com/inventory.html");

  //step 2 : Add to Cart
  await inventoryPage.addItemTocart();

  //step 3 : fill name lastname zipcode
  await checkoutPage.checkOutItem("Anna", "Doner", "10900");

  //step 4 : verify check out success
  await expect(checkoutPage.checkOutSuccess).toHaveText("Thank you for your order!");

});