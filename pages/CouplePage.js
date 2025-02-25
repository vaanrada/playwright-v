export class CouplePage {


    /**
     *
     * @param {import("@playwright/test").Page} page
     */
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://admin-staging.anissa.ai/coupon/';

        this.locatorButtonCreate = page.getByRole('button', { name: 'เพิ่มคูปอง' });
        this.locatorName = page.getByRole('textbox', { name: 'ชื่อคูปอง:' });
        this.locatorCode = page.getByRole('textbox', { name: 'โค้ดคูปอง:' });
        this.locatorToken = page.getByRole('spinbutton', { name: 'Token:' });
        this.locatorNum = page.getByRole('spinbutton', { name: 'จำนวนบทความที่ใช้ได้:' });
        this.locatorTags = page.getByRole('textbox', { name: 'Tags:' });
        // การค้นหาปุ่มภายใน label ที่มีข้อความ 'Tags:'
        this.locatorButtonSent = page.locator('label', { hasText: 'Tags:' }).locator('button');
        this.locatorFirst = page.getByRole('button', { name: 'Choose date' }).first();
        this.locatorNth = page.getByRole('button', { name: 'Choose date', exact: true }).first;
        this.locaterDetail = page.getByRole('textbox', { name: 'รายละเอียด:' });
        this.locaterCreate = page.getByRole('button', { name: 'เพิ่ม' })

    }
    async goto() {
        await this.page.goto(this.baseUrl);
    }
    async clickCreate() {
        await this.locatorButtonCreate.click();
    }
    async fillName(namepro) {
        await this.page.getByRole('textbox', { name: 'ชื่อคูปอง:'  }).fill(namepro);
    }
    async fillCode(code) {
        await this.page.getByRole('textbox', { name: 'โค้ดคูปอง:'  }).fill(code);
    }
    async fillToken(token) {
        await this.page.getByRole('spinbutton', { name: 'Token:' }).fill(token);
    } 
    async fillNum(num) {
        await this.page.getByRole('spinbutton', { name: 'จำนวนบทความที่ใช้ได้:'   }).fill(num);
    }
    async fillTags(tags) {
        await this.page.getByRole('textbox', { name: 'Tags:' }).fill(tags);
    }
    async clickSent() {
        await this.page.locator('label', { hasText: 'Tags:' }).locator('button').click();
    }
    async clickFirst() {
        await this.page.getByRole('button', { name: 'Choose date' }).first().click();
        await this.page.getByRole('gridcell', { name: '25' }).click();
    }
    // async clickNth() {
    //     await this.page.getByRole('button', { name: 'Choose date', exact: true }).nth(1).click();
    //     await this.page.getByRole('gridcell', { name: '27' }).click();
    // }
    // async fillDetail(detail) {
    //     await this.page.getByRole('textbox', { name: 'รายละเอียด:' });
    // }
} 