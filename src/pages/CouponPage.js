export class CouponPage {


    /**
     *
     * @param {import("@playwright/test").Page} page
     */
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://admin-staging.anissa.ai/coupon/';

        //this.locatorMenuCouple = page.getBygetByText('Coupon');
        this.locatorButtonCreate = page.getByRole('button', { name: 'เพิ่มคูปอง' });
        this.locatorName = page.getByRole('textbox', { name: 'ชื่อคูปอง:' });
        this.locatorCode = page.getByRole('textbox', { name: 'โค้ดคูปอง:' });
        this.locatorToken = page.getByRole('spinbutton', { name: 'Token:' });
        this.locatorNum = page.getByRole('spinbutton', { name: 'จำนวนบทความที่ใช้ได้:' });
        this.locatorFirst = page.getByRole('textbox', { name: 'MM/DD/YYYY' }).first();
        this.locatorNth = page.getByRole('textbox', { name: 'MM/DD/YYYY' }).nth(1);
        this.locaterDetail = page.getByRole('textbox', { name: 'รายละเอียด:' });
        this.locaterCreate = page.getByRole('button', { name: 'เพิ่ม' });

    }
    async goto() {
        await this.page.goto(this.baseUrl);
    }
    async clickButtonCreate() {
        await this.locatorButtonCreate.click();
    }
    async fillName(namepro) {
        await this.page.getByRole('textbox', { name: 'ชื่อคูปอง:' }).fill(namepro);
    }
    async fillCode(code) {
        await this.page.getByRole('textbox', { name: 'โค้ดคูปอง:' }).fill(code);
    }
    async fillToken(token) {
        await this.page.getByRole('spinbutton', { name: 'Token:' }).fill(token);
    }
    async fillNum(num) {
        await this.page.getByRole('spinbutton', { name: 'จำนวนบทความที่ใช้ได้:' }).fill(num);
    }
    async fillTags(tags) {
        await this.page.getByRole('textbox', { name: 'Tags:' }).fill(tags);
    }
    async clickSent() {
        await this.page.locator('label', { hasText: 'Tags:' }).locator('button').click();
    }
    async clickFirst(startDate) {
        await this.locatorFirst.fill(startDate);
    }
    async clickNth(endDate) {
        await this.locatorNth.fill(endDate);
        
    }
    async fillDetail() {
        await this.page.getByRole('textbox', { name: 'รายละเอียด:' });
    }
    async clickCreate(){
        await this.page.getByRole('button', { name: 'เพิ่ม' });
    }
}