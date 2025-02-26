export class AiModelPage {


    /**
     *
     * @param {import("@playwright/test").Page} page
     */
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://admin-staging.anissa.ai/chat-ai-model/';

        this.locatorButtonCreate = page.getByRole('button', { name: 'เพิ่ม Model' });
        this.locatorName = page.locator('#name');
        this.locatoruploadImage = page.locator('input[type="file"]');
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
    async uploadImage() {
        await this.locatoruploadImage.setInputFiles('./10-1.jpg');
    }
    async clickSave() {
        await this.locatorButtonSave.click();
    }
}