export class MasterTagPage {


    /**
     *
     * @param {import("@playwright/test").Page} page
     */
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://admin-staging.anissa.ai/master/tag/';
        this.locatorButtonCreate = page.getByRole('button', { name: 'create tag' });
        this.locatorName = page.locator('input[name="name"]');
        this.locatorDescription = page.locator('textarea[name="description"]');
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
    async fillDescription(description) {
        await this.locatorDescription.fill(description);
    }
    async clickButtonSave() {
        await this.locatorButtonSave.click();
    }
}