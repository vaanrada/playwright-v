import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { PackagePage } from "../pages/PackagePage.js";

test.describe("สร้าง Package", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.fillUserPassword('admintester', 'uwVjVE4ziK');
        await loginPage.clickLogin();
        await page.waitForLoadState("networkidle");
    })
    test('กรณีกรอกข้อมูลครบถ้วน', async ({ page }) => {
        const packagepage = new PackagePage(page);
        await packagepage.goto()
        await packagepage.clickCreate();
        await page.waitForLoadState("networkidle");
        await packagepage.fillName("Package Tiny");
        await packagepage.filldescription("Test Package");
        await packagepage.fillpricePerMonth("299");
        await packagepage.fillpricePerYear("199");
        await packagepage.fillpricePerYear("199");
        await packagepage.filltoken("1000");
        await packagepage.fillCreadit("10");
        await packagepage.clickSave();
        await page.waitForLoadState("networkidle");
    });
})