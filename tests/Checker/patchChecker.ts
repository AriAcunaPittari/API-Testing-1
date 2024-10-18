import { Page } from "playwright-core";

export class PatchAPIChecker{
    page: Page;
    constructor(page:Page){
        this.page = page;

    }
}