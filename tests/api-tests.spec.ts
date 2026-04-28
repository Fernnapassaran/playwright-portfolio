import { test, expect } from "@playwright/test";
import { count } from "node:console";
import { request } from "node:http";

test.describe("API Testing", () => {
  test("should fetch product list successfully", async ({ request }) => {
    //1. get request go to API
    const response = await request.get(
      "https://jsonplaceholder.typicode.com/posts/1",
    );

    //2.Verify that the response status is true.
    expect(response.ok()).toBeTruthy();

    //3.Verify Status Code is 200 successfully
    expect(response.status()).toBe(200);

    // 3. อ่านข้อมูลที่ส่งกลับมาเป็น JSON
    // const body = await response.json();
    // console.log(body);
  });

  test("Should return 404", async ({ request }) => {
    //1.get request go to api
    const response = await request.get(
      "https://www.saucedemo.com/api/not-found",
    );

    //2.Verify that the response status is true.
    expect(response.ok()).toBeFalsy();

    //3.verify status code is 404
    expect(response.status()).toBe(404);
  });
});
