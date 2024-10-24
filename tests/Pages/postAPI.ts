import { APIRequestContext } from "playwright-core";
import { URLNeeded } from "./urlNeeded";

export class PostAPI {
  request: APIRequestContext;
  urlNeeded: URLNeeded;
  constructor(request: APIRequestContext) {
    this.request = request;
    this.urlNeeded = new URLNeeded(this.request);
  }
  async createNew(createPayLoad: { name: string; job: string }) {
    const requestURL = await this.urlNeeded.urlPostCreate;
    const response = await this.request.post(requestURL, {
      data: createPayLoad,
    });
    const postCreate = await response.json();
    return response;
  }
  async registerSuccess(registerOKPayload: {
    email: string;
    password: string;
  }) {
    const requestURL = await this.urlNeeded.urlPostRegisterOK!;
    const response = await this.request.post(requestURL, {
      data: registerOKPayload,
    });
    const postRegisterOk = await response.json();
    return response;
  }
  async registerFailed(registerNOTPayload: { email: string }) {
    const requestURL = await this.urlNeeded.urlPostRegisterNO!;
    const response = await this.request.post(requestURL, {
      data: registerNOTPayload,
    });
    const postRegisterNo = await response.json();
    return response;
  }
  async loginSuccess(loginOKPayload: { email: string; password: string }) {
    const requestURL = await this.urlNeeded.urlPostLoginOK!;
    const response = await this.request.post(requestURL, {
      data: loginOKPayload,
    });
    const postLoginOk = await response.json();
    return response;
  }
  async loginFailed(loginNOTPayload: { email: string }) {
    const requestURL = await this.urlNeeded.urlPostLoginNO!;
    const response = await this.request.post(requestURL, {
      data: loginNOTPayload,
    });
    const postLoginNo = await response.json();
    return response;
  }
}
