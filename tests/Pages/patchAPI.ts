import { APIRequestContext } from "playwright-core";
import { URLNeeded } from "./urlNeeded";

export class PatchAPI {
  request: APIRequestContext;
  urlNeeded: URLNeeded;
  constructor(request: APIRequestContext) {
    this.request = request;
    this.urlNeeded = new URLNeeded(this.request);
  }
  async updateUser(updatePayload: { name: string; job: string },json:boolean=false) {
    const requestURL = await this.urlNeeded.urlPatchUpdate!;
    const response = await this.request.patch(requestURL, {
      data: updatePayload,
    });

    if (json===true){
      const patchUpdate = await response.json();
      return patchUpdate;
    }else {
      return response;
    }
  }
}
