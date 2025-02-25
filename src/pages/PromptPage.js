export class PromptPage {


    /**
     *
     * @param {import("@playwright/test").Page} page
     */
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://admin-staging.anissa.ai/prompt-library/';

        this.locatorButtonCreate = page.getByRole('button', { name: 'สร้าง Prompt Library' });
        this.locatorCat = page.getByRole('combobox', { name: 'Without label' });
        this.locatorOption = page.getByRole('option', { name: 'Writing & Content' });
        this.locatorName = page.locator('#name');
        this.locatorPrompt = page.locator('#prompt');
        // this.locatoruploadImage = page.locator('input[type="file"]');
    }
    async goto() {
        await this.page.goto(this.baseUrl);
    }
    async clickCreate() {
        await this.locatorButtonCreate.click();
    }
    async clickCat() {
        await this.page.getByRole('combobox', { name: 'Without label' }).click();
    }
    async clickOption(option) {
        await this.page.getByRole('option', { name: 'Writing & Content' }).click();
    }
    async fillName() {
        await this.page.locator('#name');
    }
    async fillPrompt() {
        await this.page.locator('#prompt');
    }
    // async uploadImage() {
    //     // กำหนดเส้นทางของไฟล์รูปภาพที่ต้องการอัปโหลด
    //     await.this.page.locator('input[type="file"]');
    //     const imagePath = 'https://i.pinimg.com/736x/8d/4d/66/8d4d6699d0d8994beeda431d5c53d626.jpg';
    
    // }
    
}
