export class ArticlePackagesPage {


    /**
     *
     * @param {import("@playwright/test").Page} page
     */
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://admin-staging.anissa.ai/article-packages/';

        this.locatorButtonCreate = page.getByRole('button', { name: 'สร้าง Article Packages' });
        this.locatorName = page.locator('#name');
        this.locatorPrice = page.locator('#price');
        this.locatorCredit = page.locator('#credit');
        this.locatorDescription = page.locator('#description');
        this.locatorButtonSave = page.getByRole('button', { name: 'เพิ่ม' });
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
    async fillPrice(price) {
        await this.locatorPrice.fill(price);
    }
    async fillCredit(credit) {
        await this.locatorCredit.fill(credit);
    }
    async fillDescription(description) {
        await this.locatorDescription.fill(description);
    }
    async clickButtonSave() {
        await this.locatorButtonSave.click();
    }
}