export class ArticleSizePage {


    /**
     *
     * @param {import("@playwright/test").Page} page
     */
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://admin-staging.anissa.ai/articles-size/';

        this.locatorButtonCreate = page.getByRole('button', { name: 'เพิ่ม Article size' });
        this.locatorButtonEdit = page.getByRole('button', { name: 'แก้ไข' }).first();
        this.locatorName = page.getByRole('textbox', { name: 'กรอกชื่อขนาด' });
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
    async clickEdit() {
        await this.locatorButtonEdit.click();
    }
}