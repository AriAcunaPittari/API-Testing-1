import { APIRequestContext, Page } from "playwright-core";

export class PatchAPIChecker{
    request: APIRequestContext;
    constructor(request: APIRequestContext) {
      this.request = request;
    }
}