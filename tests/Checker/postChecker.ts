import { APIRequestContext, APIResponse, Page } from "playwright-core";
import { expect } from "playwright/test";

export class PostAPIChecker {
  request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async createNewCheck(returnData: APIResponse) {
    await expect(returnData).toBeOK();
  }
  async registerOKCheck(returnData: APIResponse) {
    await expect(returnData).toBeOK();
  }
  async registerNOCheck(returnData: APIResponse) {
    await expect(returnData.status()).toBe(400);
  }
  async loginOKCheck(returnData: APIResponse) {
    await expect(returnData).toBeOK();
  }
  async loginNOCheck(returnData: APIResponse) {
    await expect(returnData.status()).toBe(400);
  }
}
