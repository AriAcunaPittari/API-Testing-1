import { APIRequestContext, Page } from "playwright-core";

export class DeleteAPIChecker{
    request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }
}