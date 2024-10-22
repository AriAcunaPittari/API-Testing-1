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

  constructor(request: APIRequestContext) {
    this.request = request;
    this.urlListUsers = process.env.URL_GET_LISTUSERS!;
    this.urlSingleUser = process.env.URL_GET_SINGLEUSER!;
    this.urlNotFound = process.env.URL_GET_NOTFOUND!;
    this.urlListResource = process.env.URL_GET_NOTFOUND!;
    this.urlSingleResource = process.env.URL_GET_NOTFOUND!;
    this.urlPostCreate = process.env.URL_GET_NOTFOUND!;
    this.urlPostLoginOK = process.env.URL_GET_NOTFOUND!;
    this.urlPostLoginNO = process.env.URL_GET_NOTFOUND!;
    this.urlPostRegisterOK = process.env.URL_GET_NOTFOUND!;
    this.urlPostRegisterNO = process.env.URL_GET_NOTFOUND!;
  }
}
