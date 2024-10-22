import { APIRequestContext, Page } from "playwright-core";

export class PostAPI{
    request: APIRequestContext;
    urlCreate: string;
    urlRegisterNo: string;
    urlRegisterYes: string;
    urlLoginYes:string;
    urlLoginNo: string;
    constructor(request: APIRequestContext) {
      this.request = request;
      this.urlCreate = process.env.URL_POST_CREATE!;
      this.urlRegisterNo = process.env.URL_POST_REGISTER_NO!;
      this.urlRegisterYes = process.env.URL_POST_REGISTER_SI!;
      this.urlLoginYes = process.env.URL_POST_LOGIN_SI!;
      this.urlLoginNo = process.env.URL_POST_LOGIN_NO!;
    }
    async createNew(){
        const requestURL = await this.urlCreate;
        const response = await this.request.get(requestURL);
        const getListUsers = await response.json();
    }
    async registerSuccess(){
        const requestURL = await this.urlRegisterYes!;
        const response = await this.request.get(requestURL);
        const getListUsers = await response.json();
    }
    async registerFailed(){
        const requestURL = await this.urlRegisterNo!;
        const response = await this.request.get(requestURL);
        const getListUsers = await response.json();
    }
    async loginSuccess(){
        const requestURL = await this.urlLoginYes!;
        const response = await this.request.get(requestURL);
        const getListUsers = await response.json();
    }
    async loginFailed(){
        const requestURL = await this.urlLoginNo!;
        const response = await this.request.get(requestURL);
        const getListUsers = await response.json();
    }
}