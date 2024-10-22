import { APIRequestContext, Page } from "playwright-core";

export class PatchAPI{
    request: APIRequestContext;
    constructor(request: APIRequestContext) {
      this.request = request;
    }
}