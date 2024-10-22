import { APIRequestContext, Page } from "playwright-core";
import { expect } from "playwright/test";
import { URLNeeded } from "../Pages/urlNeeded";

export class GetAPIChecker {
  request: APIRequestContext;
  urlNeeded: URLNeeded;
  statusOk: number;
  statusNotFound: number;
  constructor(request: APIRequestContext) {
    this.request = request;
    this.urlNeeded = new URLNeeded(this.request);
    this.statusOk = 200;
    this.statusNotFound = 404;
  }
  async ListUsersCheck() {
    const requestURL = await this.urlNeeded.urlListUsers;
    const response = await this.request.get(requestURL);
    await expect(response.status()).toBe(this.statusOk);
  }
  async notFoundCheck() {
    const requestURL = await this.urlNeeded.urlListUsers;
    const response = await this.request.get(requestURL);
    await expect(response.status()).toBe(this.statusNotFound);
  }
  async SingleUsersCheck() {
    const requestURL = await this.urlNeeded.urlSingleUser;
    const response = await this.request.get(requestURL);
    await expect(response.status()).toBe(this.statusOk);
  }
  async ListResourseCheck() {
    const requestURL = await this.urlNeeded.urlListResource;
    const response = await this.request.get(requestURL);
    await expect(response.status()).toBe(this.statusOk);
  }
  async SingleResourseCheck() {
    const requestURL = await this.urlNeeded.urlSingleResource;
    const response = await this.request.get(requestURL);
    await expect(response.status()).toBe(this.statusOk);
  }
}
