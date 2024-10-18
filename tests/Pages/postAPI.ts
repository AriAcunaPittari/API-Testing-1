import { Page } from "playwright-core";

export class PostAPI{
    page: Page;
    constructor(page:Page){
        this.page = page;

    }
}