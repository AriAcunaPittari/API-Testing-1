import { APIRequestContext, Page } from "playwright-core";
import { URLNeeded } from "./urlNeeded";

export class PatchAPI {
  request: APIRequestContext;
  urlNeeded: URLNeeded;
  constructor(request: APIRequestContext) {
    this.request = request;
    this.urlNeeded = new URLNeeded(this.request);
  }
  async updateUser(updatePayload: { name: string; job: string }) {
    const requestURL = await this.urlNeeded.urlPatchUpdate!;
    const response = await this.request.patch(requestURL, {
      data: updatePayload,
    });
    const patchUpdate = await response.json();
    return response;
  }
}
