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
        this.locatorTags = page.getByRole('textbox', { name: 'Tags:' });
        this.locatorButtonSent = page.locator('label', { hasText: 'Tags:' }).locator('button');
        this.locatorFirst = page.getByRole('textbox', { name: 'MM/DD/YYYY' }).first();
        this.locatorNth = page.getByRole('textbox', { name: 'MM/DD/YYYY' }).nth(1);
        this.locatorDetail = page.getByRole('textbox', { name: 'รายละเอียด:' });
        this.locatorCreate = page.getByRole('button', { name: 'เพิ่ม' });

    }
    async goto() {
        await this.page.goto(this.baseUrl);
    }
    async clickButtonCreate() {
        await this.locatorButtonCreate.click();
    }
    async fillName(namepro) {
        await this.locatorName.fill(namepro);
    }
    async fillCode(code) {
        await this.locatorCode.fill(code);
    }
    async fillToken(token) {
        await this.locatorToken.fill(token);
    }
    async fillNum(num) {
        await this.locatorNum.fill(num);
    }
    async fillTags(tags) {
        await this.locatorTags.fill(tags);
    }
    async clickSent() {
        await this.locatorButtonSent.click();
    }
    async clickFirst(startDate) {
        await this.locatorFirst.fill(startDate);
    }
    async clickNth(endDate) {
        await this.locatorNth.fill(endDate);
        
    }
    async fillDetail(detail) {
        await this.locatorDetail.fill(detail);
    }
    async clickCreate(){
        await this.locatorCreate.click();
    }
}