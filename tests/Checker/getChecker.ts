import { APIRequestContext, APIResponse } from "playwright-core";
import { expect } from "playwright/test";

export class GetAPIChecker {
  request: APIRequestContext;
  statusNotFound: number;
  constructor(request: APIRequestContext) {
    this.request = request;
    this.statusNotFound = 404;
  }
  async positiveCheck(returnData: APIResponse) {
    await expect(returnData).toBeOK();
  }
  async notFoundCheck(returnData: APIResponse) {
    await expect(returnData.status()).toBe(this.statusNotFound);
  }
}
