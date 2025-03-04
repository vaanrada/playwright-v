export class BrandCortexPage {


    /**
     *
     * @param {import("@playwright/test").Page} page
     */
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://admin-staging.anissa.ai/master/brand-cortex/';

        this.locatorButtonCreate = page.getByRole('button', { name: 'create brand' });
        this.locatorButtonEdit = page.getByRole('button', { name: 'แก้ไข' }).first()
        this.locatorAttribute = page.getByRole('button', { name: 'เพิ่ม Attribute' });
        this.locatorAttributeName = page.getByRole('textbox', { name: 'Attribute name' });
        this.locatorDescription = page.getByRole('textbox', { name: 'Description' });
        this.locatorName = page.locator('input[name="name"]');
        this.locatorPrompt = page.locator('textarea[name="prompt"]');
        this.locatorButtonSave = page.getByRole('button', { name: 'บันทึก' });
    }
    async goto() {
        await this.page.goto(this.baseUrl);
    }
    async clickCreate() {
        await this.locatorButtonCreate.click();
    }
    async clickEdit() {
        await this.locatorButtonEdit.click();
    }
    async clickAttribute() {
        await this.locatorAttribute.click();
    }
    async fillAttributeName(attributename) {
        await this.locatorAttributeName.fill(attributename);
    }
    async fillDescription(description) {
        await this.locatorDescription.fill(description);
    }
    async fillName(name) {
        await this.locatorName.fill(name);
    }
    async fillPrompt(prompt) {
        await this.locatorPrompt.fill(prompt);
    }
    async clickButtonSave() {
        await this.locatorButtonSave.click();
    }
}