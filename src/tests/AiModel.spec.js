import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { AiModelPage } from "../pages/AiModelPage.js";

test.describe("สร้าง AI Model", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.fillUserPassword('admintester', 'uwVjVE4ziK');
        await loginPage.clickLogin();
        await page.waitForLoadState("networkidle");
    })
    test('กรณีกรอกข้อมูลครบถ้วน', async ({ page }) => {
        const aimodelpage = new AiModelPage(page);
        await aimodelpage.goto()
        await aimodelpage.clickCreate();
        await page.waitForLoadState("networkidle");
        await expect(page.locator('#name')).toBeVisible();
        const element = page.locator('#name');
        await element.fill('test AI');
        await aimodelpage.uploadImage();
        await aimodelpage.clickSave();
        await page.waitForLoadState("networkidle");
    });
    test('กรณีไม่กรอกชื่อ AI Model', async ({ page }) => {
        const aimodelpage = new AiModelPage(page);
        await aimodelpage.goto()
        await aimodelpage.clickCreate();
        await page.waitForLoadState("networkidle");
        await expect(page.locator('#name')).toBeVisible();
        const element = page.locator('#name');
        await element.fill('');
        await aimodelpage.uploadImage();
        await aimodelpage.clickSave();
        await expect(page.getByText('กรุณากรอกชื่อ Model')).toBeVisible();
    });
    test('กรณีไม่อัปโหลดรูป AI Model', async ({ page }) => {
        const aimodelpage = new AiModelPage(page);
        await aimodelpage.goto()
        await aimodelpage.clickCreate();
        await page.waitForLoadState("networkidle");
        await expect(page.locator('#name')).toBeVisible();
        const element = page.locator('#name');
        await element.fill('test AI');
        // await aimodelpage.uploadImage();
        await aimodelpage.clickSave();
        await page.waitForLoadState("networkidle");
    });
})