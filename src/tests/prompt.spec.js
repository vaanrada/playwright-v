import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { PromptPage } from "../pages/PromptPage.js";
//const LoginPage = require("../pages/login.page.js");


test.describe("หน้า Prompt Library", () => {
    test.beforeEach(async ({ page }) => {
       const loginPage = new LoginPage(page);
       await loginPage.goto();
       await loginPage.fillUserPassword('admintester', 'uwVjVE4ziK');
       await loginPage.clickLogin();
       await page.waitForLoadState("networkidle");
    })
    test('กรณีกรอกข้อมูลครบถ้วน', async ({ page }) => {
       const promptPage = new PromptPage(page);
       await promptPage.goto()
       await promptPage.clickCreate();
       await page.waitForLoadState("networkidle");
       await promptPage.clickCat();
       await promptPage.clickOption();
       await expect(page.locator('#name')).toBeVisible();  // คอยให้ element แสดง
       const element = page.locator('#name');
       await element.fill('new prompt library');
       await expect(page.locator('#prompt')).toBeVisible();  // คอยให้ element แสดง
       const locator = page.locator('#prompt');
       await locator.fill('ดอกไม้ประจำวัน [Day]');
    //    await promptPage.uploadImage();
    });
})