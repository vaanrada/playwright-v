export class ToneOfVoicePage {


    /**
     *
     * @param {import("@playwright/test").Page} page
     */
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://admin-staging.anissa.ai/tone-of-voice/';

        this.locatorButtonCreate = page.getByRole('button', { name: 'เพิ่ม Tone of voice' });
        this.locatorName = page.getByRole('textbox', { name: 'กรอกชื่อโทนเสียง' });
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
        await this.locatorName.fillName(name);
    }
    async fillValue(value) {
        await this.locatorValue.fillValue(value);
    }
    async clickButtonSave() {
        await this.locatorButtonSave.click();
    }
}