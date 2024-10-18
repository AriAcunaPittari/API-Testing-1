import { Page } from "playwright-core";

export class PatchAPI{
    page: Page;
    constructor(page:Page){
        this.page = page;

    }
}