import { Page } from "playwright-core";

export class PostAPIChecker{
    page: Page;
    constructor(page:Page){
        this.page = page;

    }
}