import { Page } from "playwright-core";

export class DeleteAPIChecker{
    page: Page;
    constructor(page:Page){
        this.page = page;

    }
}