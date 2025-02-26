export class PromptPage {


    /**
     *
     * @param {import("@playwright/test").Page} page
     */
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://admin-staging.anissa.ai/prompt-library/';

        this.locatorButtonCreate = page.getByRole('button', { name: 'สร้าง Prompt Library' });
        this.locatorCat = page.getByRole('combobox', { name: 'Without label' });
        this.locatorOption = page.getByRole('option', { name: 'Writing & Content' });
        this.locatorName = page.locator('#name');
        this.locatorPrompt = page.locator('#prompt');
        this.locatoruploadImage = page.locator('input[type="file"]');
        this.locatorButtonSave = page.getByRole('button', { name: 'บันทึก' });
    }
    async goto() {
        await this.page.goto(this.baseUrl);
    }
    async clickCreate() {
        await this.locatorButtonCreate.click();
    }
    async clickCat() {
        await this.locatorCat.click();
    }
    async clickOption(option) {
        await this.locatorOption.click(option);
    }
    async fillName(name) {
        await this.locatorName.fill(name);
    }
    async fillPrompt(prompt) {
        await this.locatorPrompt.fill(prompt);
    }
    async uploadImage() {
        await this.locatoruploadImage.setInputFiles('./10-1.jpg');
    }
    async clickButtonSave() {
        await this.locatorButtonSave.click();
    }
}
