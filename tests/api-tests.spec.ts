import { test, expect } from "@playwright/test";
import { count } from "node:console";
import { request } from "node:http";

test.describe("API Testing", () => {
  test("should fetch product list successfully", async ({ request }) => {
    //1. get request go to API
    const response = await request.get(
      "https://jsonplaceholder.typicode.com/posts/1",
    );

    //2.verify that the response status is true.
    expect(response.ok()).toBeTruthy();

    //3.verify Status Code is 200 successfully
    expect(response.status()).toBe(200);

    //4.verify the response data as JSON.
    const body = await response.json();

    //5.Verify that the response body data is correct
    console.log(body);

    //6.Verify response body is not empty
    expect(body).toBeDefined();

    expect(body.userId).toBe(1);
    expect(body.id).toBe(1);
    expect(typeof body.title).toBe("string");
  });

  test("Should return 404", async ({ request }) => {
    //1.get request go to api
    const response = await request.get(
      "https://www.saucedemo.com/api/not-found",
    );

    //2.verify that the response status is true.
    expect(response.ok()).toBeFalsy();

    //3.verify status code is 404
    expect(response.status()).toBe(404);
  });
});
