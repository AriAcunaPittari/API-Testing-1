import { APIRequestContext } from "playwright-core";
import { URLNeeded } from "./urlNeeded";

export class PutAPI {
  request: APIRequestContext;
  urlNeeded: URLNeeded;
  constructor(request: APIRequestContext) {
    this.request = request;
    this.urlNeeded = new URLNeeded(this.request);
  }
  async updateUser(updatePayload: { name: string; job: string }) {
    const requestURL = await this.urlNeeded.urlPutUpdate;
    const response = await this.request.put(requestURL, {
      data: updatePayload,
    });
    const putUpdate = await response.json();
    return response;
  }
}
