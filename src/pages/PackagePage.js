export class PackagePage {


    /**
     *
     * @param {import("@playwright/test").Page} page
     */
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://admin-staging.anissa.ai/package/';

        this.locatorButtonCreate = page.getByRole('button', { name: 'สร้างแพ็กเกจ' });
        this.locatorName = page.locator('input[name="name"]');
        this.locatordescription = page.locator('input[name="description"]');
        this.locatorpricePerMonth = page.locator('input[name="pricePerMonth"]');
        this.locatorpricePerYear = page.locator('input[name="pricePerYear"]');
        this.locatortoken = page.locator('input[name="tokenArticle"]');
        this.locatorCreadit = page.locator('input[name="articlesCredit"]');
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
    async filldescription(description) {
        await this.locatordescription.fill(description);
    }
    async fillpricePerMonth(pricePerMonth) {
        await this.locatorpricePerMonth.fill(pricePerMonth);
    }
    async fillpricePerYear(pricePerYear) {
        await this.locatorpricePerYear.fill(pricePerYear);
    }
    async filltoken(token) {
        await this.locatortoken.fill(token);
    }
    async fillCreadit(creadit) {
        await this.locatorCreadit.fill(creadit);
    }
    async clickSave() {
        await this.locatorButtonSave.click();
    }
}