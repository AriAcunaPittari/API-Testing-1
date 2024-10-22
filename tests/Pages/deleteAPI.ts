import { APIRequestContext, Page } from "playwright-core";

export class DeleteAPI{
    request: APIRequestContext;
    constructor(request: APIRequestContext) {
      this.request = request;
    }
}