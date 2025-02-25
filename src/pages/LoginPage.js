export class LoginPage {


    /**
     *
     * @param {import("@playwright/test").Page} page
     */
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://admin-staging.anissa.ai/';

        this.locatorUsername = page.getByRole('textbox', { name: 'Username' });
        this.locatorPassword = page.getByRole('textbox', { name: 'Password' });
        this.locatorButtonLogin = page.getByRole('button', { name: 'Sign In' });
    }
    async goto() {
        await this.page.goto(this.baseUrl);
    }
    async fillUserPassword(username, password) {
        await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);

    }
    async clickLogin() {
        await this.locatorButtonLogin.click();
    }
}
