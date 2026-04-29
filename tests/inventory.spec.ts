import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import testData from "../data/items.json";

test("add item once success", async ({ page }) => {
  //declare a variable
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  //step 1 : Login
  //go to the web
  await page.goto("/inventory.html");

  //step 2 : Add to Cart
  await inventoryPage.addOnceItems(testData.singleItem);

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

  //go to the web
  await page.goto("/inventory.html");

  //find the items
  // for (const item of items) {
  //   await page.locator(`[data-test="${item}"]`).click();
  // }
  await inventoryPage.addMultipleItems(testData.inventoryItems);

  // step 3 : Verify count number on the cart
  await expect(inventoryPage.shoppingCartBadge).toHaveText(
    testData.inventoryItems.length.toString(),
  );
});
