import { APIRequestContext } from "playwright-core";
import { URLNeeded } from "./urlNeeded";

export class DeleteAPI{
    request: APIRequestContext;
    urlNeeded: URLNeeded;
    constructor(request: APIRequestContext) {
      this.request = request;
      this.urlNeeded = new URLNeeded(this.request);
    }
    async deleteUser(deletePayload:any){
      const requestURL = await this.urlNeeded.urlPatchUpdate!;
      const response = await this.request.patch(requestURL, {
        data: deletePayload,
      });
      const patchUpdate = await response.json();
      return response;
    }
}