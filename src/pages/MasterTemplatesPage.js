export class MasterTemplatesPage {


    /**
     *
     * @param {import("@playwright/test").Page} page
     */
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://admin-staging.anissa.ai/master/templates/';
        this.locatorButtonCreate = page.getByRole('button', { name: 'create template' });
        this.locatorMasterWri = page.locator('#mui-component-select-masterWriterId');
        this.locatorOption1 = page.getByRole('option', { name: 'Rada test' })
        this.locatorOpenAi = page.locator('#mui-component-select-modelId');
        this.locatorOption2 = page.getByRole('option', { name: 'Anissa Model I', exact: true });
        this.locatorName = page.locator('input[name="name"]');
        this.locatorDescription = page.locator('textarea[name="description"]');
        this.locatorVideo = page.locator('input[name="videoUrl"]')
        this.locatorButtonSave = page.getByRole('button', { name: 'บันทึก' });
    }
    async goto() {
        await this.page.goto(this.baseUrl);
    }
    async clickCreate() {
        await this.locatorButtonCreate.click();
    }
    async clickMasterWri() {
        await this.locatorMasterWri.click();
    }
    async clickOption1() {
        await this.locatorOption1.click();
    }
    async clickOpenAi() {
        await this.locatorOpenAi.click();
    }
    async clickOption2() {
        await this.locatorOption2.click();
    }
    async fillName(name) {
        await this.locatorName.fill(name);
    }
    async fillDescription(description) {
        await this.locatorDescription.fill(description);
    }
    async fillVideo(video) {
        await this.locatorVideo.fill(video);
    }
    async clickButtonSave() {
        await this.locatorButtonSave.click();
    }
}