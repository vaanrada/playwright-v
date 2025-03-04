export class HumanizeTextPage {


    /**
     *
     * @param {import("@playwright/test").Page} page
     */
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://admin-staging.anissa.ai/humanize-text/';

        this.locatorButtonCreate = page.getByRole('button', { name: 'เพิ่ม Humanize text' });
        this.locatorName = page.getByRole('textbox', { name: 'กรอกชื่อ Humanize text' })
        this.locatorValue = page.getByRole('textbox', { name: 'กรอกค่า' });
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
    async fillValue(value) {
        await this.locatorValue.fill(value);
    }
    async clickButtonSave() {
        await this.locatorButtonSave.click();
    }
}