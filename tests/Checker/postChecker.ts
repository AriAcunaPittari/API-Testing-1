import { APIRequestContext, APIResponse, Page } from "playwright-core";
import { expect } from "playwright/test";

export class PostAPIChecker {
  request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async positiveCheck(returnData: APIResponse) {
    await expect(returnData).toBeOK();
  }
  async negativeCheck(returnData: APIResponse) {
    await expect(returnData.status()).toBe(400);
  }
}
