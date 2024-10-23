import { APIRequestContext, APIResponse, Page } from "playwright-core";
import { expect } from "playwright/test";

export class DeleteAPIChecker{
    request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }
  async deleteChecker(returnData: APIResponse) {
    await expect(returnData).toBeOK();
  }
}