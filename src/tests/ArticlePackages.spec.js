import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { ArticlePackagesPage } from "../pages/ArticlePackagesPage.js";

test.describe("เพิ่ม Article Size", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.fillUserPassword('admintester', 'uwVjVE4ziK');
        await loginPage.clickLogin();
        await page.waitForLoadState("networkidle");
    })
    test('กรณีกรอกข้อมูลครบถ้วน', async ({ page }) => {
        const articlepackagespage = new ArticlePackagesPage (page);
        await articlepackagespage.goto()
        await articlepackagespage.clickCreate();
        await page.waitForLoadState("networkidle");
        await articlepackagespage.fillName("Packages AASS");
        await articlepackagespage.fillPrice("500");
        await articlepackagespage.fillCredit("3");
        await articlepackagespage.fillDescription("test description");
        await articlepackagespage.clickButtonSave();
    });
})