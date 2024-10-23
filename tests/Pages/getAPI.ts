import { APIRequestContext } from "playwright-core";
import { URLNeeded } from "./urlNeeded";

export class GetAPI {
  request: APIRequestContext;
  urlNeeded: URLNeeded;
  constructor(request: APIRequestContext) {
    this.request = request;
    this.urlNeeded = new URLNeeded(this.request);
  }
  async ListUsers() {
    const requestURL = await this.urlNeeded.urlListUsers;
    const response = await this.request.get(requestURL);
    const getListUsers = await response.json();
    return response;
  }
  async SingleUsers() {
    const requestURL = await this.urlNeeded.urlSingleUser;
    const response = await this.request.get(requestURL);
    const getSingleUsers = await response.json();
    //!Crear IF para obtener status o Data (consultar)
    return response;
  }
  async NotFound() {
    const requestURL = await this.urlNeeded.urlNotFound;
    const response = await this.request.get(requestURL);
    const getNotFound = await response.json();
    return response;
  }
  async ListResourse() {
    const requestURL = await this.urlNeeded.urlListResource;
    const response = await this.request.get(requestURL);
    const getListResource = await response.json();
    return response;
  }
  async SingleResourse() {
    const requestURL = await this.urlNeeded.urlSingleResource;
    const response = await this.request.get(requestURL);
    const getSingleResourse = await response.json();
    return response;
  }
}
