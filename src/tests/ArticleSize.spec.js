import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { ArticleSizePage } from "../pages/ArticleSizePage.js";

test.describe("เพิ่ม Article Size", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.fillUserPassword('admintester', 'uwVjVE4ziK');
        await loginPage.clickLogin();
        await page.waitForLoadState("networkidle");
    })
    test('กรณีกรอกข้อมูลครบถ้วน', async ({ page }) => {
        const articlesizepage = new ArticleSizePage (page);
        await articlesizepage.goto()
        await articlesizepage.clickCreate();
        await page.waitForLoadState("networkidle");
        await articlesizepage.fillName("test size");
        await articlesizepage.fillValue("testka");
        await articlesizepage.clickButtonSave();
    });
    test('กรณีไม่กรอกชื่อขนาด', async ({ page }) => {
        const articlesizepage = new ArticleSizePage (page);
        await articlesizepage.goto()
        await articlesizepage.clickCreate();
        await page.waitForLoadState("networkidle");
        await articlesizepage.fillName("");
        await articlesizepage.fillValue("testka");
        await articlesizepage.clickButtonSave();
        await expect(page.getByText('กรุณากรอกข้อมูลให้ครบ')).toBeVisible();
    });
    test('กรณีไม่กรอกค่า', async ({ page }) => {
        const articlesizepage = new ArticleSizePage (page);
        await articlesizepage.goto()
        await articlesizepage.clickCreate();
        await page.waitForLoadState("networkidle");
        await articlesizepage.fillName("test size");
        await articlesizepage.fillValue("");
        await articlesizepage.clickButtonSave();
        await expect(page.getByText('กรุณากรอกข้อมูลให้ครบ')).toBeVisible();
    });
})
test.describe("แก้ไข Article Size", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.fillUserPassword('admintester', 'uwVjVE4ziK');
        await loginPage.clickLogin();
        await page.waitForLoadState("networkidle");
    })
    test('กรณีกรอกข้อมูลครบถ้วน', async ({ page }) => {
        const articlesizepage = new ArticleSizePage (page);
        await articlesizepage.goto()
        await articlesizepage.clickEdit();
        await page.waitForLoadState("networkidle");
        await articlesizepage.fillName("");
        await articlesizepage.fillName("test edit size");
        await articlesizepage.fillValue("test ei");
        await articlesizepage.clickButtonSave();
    });
})