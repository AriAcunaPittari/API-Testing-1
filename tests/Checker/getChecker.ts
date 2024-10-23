import { APIRequestContext } from "playwright-core";
import { expect } from "playwright/test";
import { URLNeeded } from "../Pages/urlNeeded";

export class GetAPIChecker {
  request: APIRequestContext;
  urlNeeded: URLNeeded;
  statusNotFound: number;
  constructor(request: APIRequestContext) {
    this.request = request;
    this.urlNeeded = new URLNeeded(this.request);
    this.statusNotFound = 404;
  }
  async ListUsersCheck(returnData: any) {
    await expect(returnData.status()).toBeOK();
  }
  async notFoundCheck(returnData: any) {
    await expect(returnData.status()).toBe(this.statusNotFound);
  }
  async SingleUsersCheck(returnData: any) {
    await expect(returnData.status()).toBeOK();
  }
  async ListResourseCheck(returnData: any) {
    await expect(returnData.status()).toBeOK();
  }
  async SingleResourseCheck(returnData: any) {
    await expect(returnData.status()).toBeOK();
  }
}
