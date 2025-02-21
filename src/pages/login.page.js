export class LoginPage {


    /**
     * 
     * @param {import("@playwright/test").Page} page 
     */
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://st2.anissa.ai/';

        this.locatorUsername = page.getByRole('textbox', { name: 'ชื่อผู้ใช้' });
        this.locatorPassword = page.getByRole('textbox', { name: 'รหัสผ่าน' });
        this.locatorButtonLogin = page.getByRole('button', { name: 'ลงชื่อเข้าใช้' });
    }
    async goto() {
        await this.page.goto(this.baseUrl);
    }
    async fillUserPassword(username, password) {
        await this.page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill(username);
        await this.page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill(password)

    }
    async clickLogin() {
        await this.locatorButtonLogin.click();
    }
}