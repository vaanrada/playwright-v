export class PromptCatPage {


    /**
     *
     * @param {import("@playwright/test").Page} page
     */
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://admin-staging.anissa.ai/prompt-library-category/';

        this.locatorButtonCreate = page.getByRole('button', { name: 'สร้าง Prompt Library Category' });
        this.locatorName = page.locator('#name');
        this.locatorColor = page.locator('#color');
        this.locatorButtonSave = page.getByRole('button', { name: 'บันทึก' });
    }
    async goto() {
        await this.page.goto(this.baseUrl);
    }
    async clickCreate() {
        await this.locatorButtonCreate.click();
    }
    async fillName(name) {
        await this.locatorName.fill(name);
    }
    async fillColore(color) {
        await this.locatorColor.fill(color);
    }
    async clickSave() {
        await this.locatorButtonSave.click();
    }
}