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
  async registerSuccess() {
    // parametrizar y pasar el dato que necesita.
    const requestURL = await this.urlNeeded.urlPostRegisterOK!;
    const registerOKPayload = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    };

    const response = await this.request.post(requestURL, {
      data: registerOKPayload,
    });

    const postRegisterOk = await response.json();
    return postRegisterOk;
  }
  async registerFailed() {
    const requestURL = await this.urlNeeded.urlPostRegisterNO!;
    const registerNOTPayload = {
      email: "sydney@fife",
    };

    const response = await this.request.post(requestURL, {
      data: registerNOTPayload,
    });

    const postRegisterNo = await response.json();
    return postRegisterNo;
  }
  async loginSuccess() {
    const requestURL = await this.urlNeeded.urlPostLoginOK!;
    const loginOKPayload = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };

    const response = await this.request.post(requestURL, {
      data: loginOKPayload,
    });
    const postLoginOk = await response.json();
    return postLoginOk;
  }
  async loginFailed() {
    const requestURL = await this.urlNeeded.urlPostLoginNO!;
    const loginNOTPayload = {
      email: "peter@klaven",
    };

    const response = await this.request.post(requestURL, {
      data: loginNOTPayload,
    });
    const postLoginNo = await response.json();
    return postLoginNo;
  }
}
