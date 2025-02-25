export class CouplePage {


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
        this.locaterCreate = page.getByRole('button', { name: 'เพิ่ม' })

    }
    async goto() {
        await this.page.goto(this.baseUrl);
    }
    //async fillUserPassword(username, password) {
        //await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
        //await this.page.getByRole('textbox', { name: 'Password' }).fill(password);

    //}
    
    async clickCreate() {
        await this.locatorButtonLogin.click();
    }
}