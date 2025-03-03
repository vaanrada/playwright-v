import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { MasterTagPage } from "../pages/MasterTagPage.js";

test.describe("สร้าง Master Tag", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.fillUserPassword('admintester', 'uwVjVE4ziK');
        await loginPage.clickLogin();
        await page.waitForLoadState("networkidle");
    })
    test('กรณีกรอกข้อมูลครบถ้วน', async ({ page }) => {
        const mastertagpage = new MasterTagPage(page);
        await mastertagpage.goto()
        await mastertagpage.clickCreate();
        await page.waitForLoadState("networkidle");
        await mastertagpage.fillName("Paweena");
        await mastertagpage.fillDescription("Test Description"); // คอยให้ element แสดง
        await mastertagpage.clickButtonSave();
    });
    test('กรณีไม่กรอกชื่อ', async ({ page }) => {
        const mastertagpage = new MasterTagPage(page);
        await mastertagpage.goto()
        await mastertagpage.clickCreate();
        await page.waitForLoadState("networkidle");
        await mastertagpage.fillName("");
        await mastertagpage.fillDescription("Test Description"); // คอยให้ element แสดง
        await mastertagpage.clickButtonSave();
        await expect(page.getByText("กรุณากรอกชื่อ")).toBeVisible()
    });
})