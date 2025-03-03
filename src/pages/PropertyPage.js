export class PropertyPage {


    /**
     *
     * @param {import("@playwright/test").Page} page
     */
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://admin-staging.anissa.ai/property/';

        this.locatorButtonCreate = page.getByRole('button', { name: 'Create Property' });
        this.locatorName = page.locator('input[name="name"]');
        this.locatorDescription = page.locator('textarea[name="description"]');
        this.locatorType = page.getByRole('combobox', { name: 'Text Field' });
        this.locatorOption = page.getByRole('option', { name: 'Select Multiple of many' });
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
    async clickType() {
        await this.locatorType.click();
    }
    async clickOption(option) {
        await this.locatorOption.click(option);
    }
    async clickButtonSave() {
        await this.locatorButtonSave.click();
    }
}