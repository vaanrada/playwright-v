import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { PromptCatPage, PromptPage } from "../pages/PromptCatPage.js";

test.describe("สร้าง Prompt Library Category", () => {
    test.beforeEach(async ({ page }) => {
       const loginPage = new LoginPage(page);
       await loginPage.goto();
       await loginPage.fillUserPassword('admintester', 'uwVjVE4ziK');
       await loginPage.clickLogin();
       await page.waitForLoadState("networkidle");
    })
    test('กรณีกรอกข้อมูลครบถ้วน', async ({ page }) => {
       const promptcatPage = new PromptCatPage(page);
       await promptcatPage.goto()
       await promptcatPage.clickCreate();
       await page.waitForLoadState("networkidle");
       await expect(page.locator('#name')).toBeVisible();
       const element = page.locator('#name');
       await element.fill('test writing');
       await expect(page.locator('#color')).toBeVisible(); // คอยให้ element แสดง
       const locator = page.locator('#color');
       await locator.fill('#561ecb');
       await promptcatPage.clickSave();
       await page.waitForLoadState("networkidle");
        
       //await page.getByRole('dialog', { name: 'สำเร็จ' }).waitForElementState("visible");
    });
    test('กรณีไม่กรอกชื่อ Prompt Library Category', async ({ page }) => {
        const promptcatPage = new PromptCatPage(page);
        await promptcatPage.goto()
        await promptcatPage.clickCreate();
        await page.waitForLoadState("networkidle");
        await expect(page.locator('#name')).toBeVisible();
        const element = page.locator('#name');
        await element.fill('');
        await expect(page.locator('#color')).toBeVisible(); // คอยให้ element แสดง
        const locator = page.locator('#color');
        await locator.fill('#561ecb');
        await promptcatPage.clickSave();
        await page.waitForLoadState("networkidle");
        await expect(page.getByText('กรุณากรอกชื่อ Prompt Library Category')).toBeVisible();
        //await page.getByRole('dialog', { name: 'สำเร็จ' }).waitForElementState("visible");
     });
     test('กรณีไม่กรอกสี Prompt Library Category:', async ({ page }) => {
        const promptcatPage = new PromptCatPage(page);
        await promptcatPage.goto()
        await promptcatPage.clickCreate();
        await page.waitForLoadState("networkidle");
        await expect(page.locator('#name')).toBeVisible();
        const element = page.locator('#name');
        await element.fill('test writing');
        await expect(page.locator('#color')).toBeVisible(); // คอยให้ element แสดง
        const locator = page.locator('#color');
        await locator.fill('');
        await promptcatPage.clickSave();
        await page.waitForLoadState("networkidle");
        await expect(page.getByText('กรุณาเพิ่มสีของ Prompt Library Category')).toBeVisible();
        //await page.getByRole('dialog', { name: 'สำเร็จ' }).waitForElementState("visible");
     });
})