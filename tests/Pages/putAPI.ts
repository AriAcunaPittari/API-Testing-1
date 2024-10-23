import { APIRequestContext } from "playwright-core";
import { URLNeeded } from "./urlNeeded";

export class PutAPI {
  request: APIRequestContext;
  urlNeeded: URLNeeded;
  constructor(request: APIRequestContext) {
    this.request = request;
    this.urlNeeded = new URLNeeded(this.request);
  }
  async updateUser(userData: any, updatePayload: any) {
    const requestURL = await this.urlNeeded.urlPutUpdate;
    //! Duda con USER DATA
    const response = await this.request.put(requestURL, {
      data: updatePayload,
    });
    const putUpdate = await response.json();
    return response;
  }
}
