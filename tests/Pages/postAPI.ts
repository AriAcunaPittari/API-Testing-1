import { APIRequestContext } from "playwright-core";
import { URLNeeded } from "./urlNeeded";

export class PostAPI {
  request: APIRequestContext;
  urlNeeded: URLNeeded;
  constructor(request: APIRequestContext) {
    this.request = request;
    this.urlNeeded = new URLNeeded(this.request);
  }
  async createNew() {
    const requestURL = await this.urlNeeded.urlPostCreate;
    const createPayLoad = {
      name: "morpheus",
      job: "leader",
    };
    const response = await this.request.post(requestURL, {
      data: createPayLoad,
    });
    const postCreate = await response.json();
    return postCreate;
  }
  async registerSuccess() { // parametrizar y pasar el dato que necesita.
    const requestURL = await this.urlNeeded.urlPostRegisterOK!;
    const response = await this.request.get(requestURL);
    const postRegisterOk = await response.json();
  }
  async registerFailed() {
    const requestURL = await this.urlNeeded.urlPostRegisterNO!;
    const response = await this.request.get(requestURL);
    const postRegisterNo = await response.json();
  }
  async loginSuccess() {
    const requestURL = await this.urlNeeded.urlPostLoginOK!;
    const response = await this.request.get(requestURL);
    const postLoginOk = await response.json();
  }
  async loginFailed() {
    const requestURL = await this.urlNeeded.urlPostLoginNO!;
    const response = await this.request.get(requestURL);
    const postLoginNo = await response.json();
  }
}
