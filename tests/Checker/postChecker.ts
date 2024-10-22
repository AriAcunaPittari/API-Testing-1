import { APIRequestContext, Page } from "playwright-core";

export class PostAPIChecker{
    request: APIRequestContext;
    constructor(request: APIRequestContext) {
      this.request = request;
    }
}