import { APIRequestContext, APIResponse } from "playwright-core";
import { expect } from "playwright/test";

export class PutChecker {
  request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }
  async updateUserChecker(returnData: APIResponse) {
    await expect(returnData).toBeOK();
  }
}
