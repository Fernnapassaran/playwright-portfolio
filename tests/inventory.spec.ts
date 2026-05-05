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
  await expect(page).toHaveURL(/.*inventory.html/);

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
  await expect(page).toHaveURL(/.*inventory.html/);

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

test("add item and remove success", async ({ page }) => {
  //declare a variable
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  //step 1 : Login
  //go to the web
  await page.goto("/inventory.html");
  await expect(page).toHaveURL(/.*inventory.html/);

  //step 2 : Add to Cart
  await inventoryPage.addOnceItems(testData.singleItem);

  //step 3 : Remove to Cart
  await expect(inventoryPage.removeButton).toBeVisible();
  await expect(inventoryPage.removeButton).toHaveText("Remove");
  await inventoryPage.removeOnceItems(testData.singleItem);

  //step 4 : Verify that the button text for this specific item changes back to "Add to cart"
  await expect(inventoryPage.getItemButton(testData.singleItem)).toHaveText(
    "Add to cart",
  );

  //step 5 : The badge is removed from the UI when the cart is empty, so we check if it is hidden.
  await expect(inventoryPage.shoppingCartBadge).toBeHidden();
});

test("add multiple items and remove all items success", async ({ page }) => {
  //declare a variable
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  //step 1 : Login
  //go to the web
  await page.goto("/inventory.html");
  await expect(page).toHaveURL(/.*inventory.html/);

  //step 2 : Add to Cart
  await inventoryPage.addMultipleItems(testData.inventoryItems);

  //step 3 : Remove to Cart
  await expect(inventoryPage.removeButton).toHaveCount(
    testData.inventoryItems.length,
  );
  await inventoryPage.removeMultipleItems(testData.inventoryItems);

  //step 4 : Verify that the button text for this specific item changes back to "Add to cart"
  //use a loop to check every item in the array
  for (const itemName of testData.inventoryItems) {
    const itemButton = inventoryPage.getItemButton(itemName);
    await expect(itemButton).toHaveText("Add to cart");
  }

  //step 5 : The badge is removed from the UI when the cart is empty, so we check if it is hidden.
  await expect(inventoryPage.shoppingCartBadge).toBeHidden();
});
