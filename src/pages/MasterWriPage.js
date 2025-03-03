export class MasterWriPage {


    /**
     *
     * @param {import("@playwright/test").Page} page
     */
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://admin-staging.anissa.ai/master/writer/';
        this.locatorButtonCreate = page.getByRole('button', { name: 'create writer' });
        this.locatorFirstName = page.locator('input[name="firstName"]');
        this.locatorLastName = page.locator('input[name="lastName"]');
        this.locatorMasterRoleTag = page.getByRole('combobox', { name: '​' });
        this.locatorOption = page.getByRole('option', { name: 'test tag master' });
        this.locatorEmail = page.locator('input[name="email"]');
        this.locatorPhone = page.locator('input[name="phoneNumber"]');
        this.locatorDescription = page.locator('textarea[name="description"]');
        this.locatorButtonSave = page.getByRole('button', { name: 'บันทึก' });
    }
    async goto() {
        await this.page.goto(this.baseUrl);
    }
    async clickCreate() {
        await this.locatorButtonCreate.click();
    }
    async fillFirstName(firstname) {
        await this.locatorFirstName.fill(firstname);
    }
    async fillLastName(lastname) {
        await this.locatorLastName.fill(lastname);
    }
    async clickMasterRoleTag() {
        await this.locatorMasterRoleTag.click();
    }
    async clickOption(option) {
        await this.locatorOption.click(option);
    }
    async fillEmail(email) {
        await this.locatorEmail.fill(email);
    }
    async fillPhone(phone) {
        await this.locatorPhone.fill(phone);
    }
    async fillDescription(description) {
        await this.locatorDescription.fill(description);
    }
    async clickButtonSave() {
        await this.locatorButtonSave.click();
    }
}