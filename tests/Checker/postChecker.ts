import { APIRequestContext, Page } from "playwright-core";
import { expect } from "playwright/test";

export class PostAPIChecker{
    request: APIRequestContext;
    constructor(request: APIRequestContext) {
      this.request = request;
    }

    async createNewCheck(returnData: any) {
      await expect(returnData.status()).toBeOK();
    }
    async registerOKCheck(returnData: any) {
      await expect(returnData.status()).toBeOK();
    }
    async registerNOCheck(returnData: any) {
      await expect(returnData.status()).toBe(400);
    }
    async loginOKCheck(returnData: any) {
      await expect(returnData.status()).toBeOK();
    }
    async loginNOCheck(returnData: any) {
      await expect(returnData.status()).toBe(400);
    }
}