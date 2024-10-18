import { Page } from "playwright-core";

export class GetAPIChecker{
    page: Page;
    constructor(page:Page){
        this.page = page;

    }
}