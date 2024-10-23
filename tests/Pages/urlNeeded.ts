import { APIRequestContext } from "playwright-core";

export class URLNeeded {
  request: APIRequestContext;
  urlListUsers: string;
  urlSingleUser: string;
  urlNotFound: string;
  urlListResource: string;
  urlSingleResource: string;
  urlPostCreate: string;
  urlPostLoginOK: string;
  urlPostLoginNO: string;
  urlPostRegisterOK: string;
  urlPostRegisterNO: string;
  urlPutUpdate: string;
  urlDelete: string;
  urlPatchUpdate: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.urlListUsers = process.env.URL_GET_LISTUSERS!;
    this.urlSingleUser = process.env.URL_GET_SINGLEUSER!;
    this.urlNotFound = process.env.URL_GET_NOTFOUND!;
    this.urlListResource = process.env.URL_GET_LISTRESOURCE!;
    this.urlSingleResource = process.env.URL_GET_SINGLERESOURCE!;
    this.urlPostCreate = process.env.URL_POST_CREATE!;
    this.urlPostLoginOK = process.env.URL_POST_LOGIN_OK!;
    this.urlPostLoginNO = process.env.URL_POST_LOGIN_NO!;
    this.urlPostRegisterOK = process.env.URL_POST_REGISTER_OK!;
    this.urlPostRegisterNO = process.env.URL_POST_REGISTER_NO!;
    this.urlPutUpdate = process.env.URL_PUT_UPDATE!;
    this.urlDelete = process.env.URL_DELETE!;
    this.urlPatchUpdate = process.env.URL_PATCH_UPDATE!;
  }
}
