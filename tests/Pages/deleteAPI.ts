import { Page } from "playwright-core";

export class DeleteAPI{
    page: Page;
    constructor(page:Page){
        this.page = page;

    }
}