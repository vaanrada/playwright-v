import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { PointOfViewPage } from "../pages/PointOfViewPage.js";

test.describe("เพิ่ม Point Of View", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.fillUserPassword('admintester', 'uwVjVE4ziK');
        await loginPage.clickLogin();
        await page.waitForLoadState("networkidle");
    })
    test('กรณีกรอกข้อมูลครบถ้วน', async ({ page }) => {
        const pointofviewpage = new PointOfViewPage (page);
        await pointofviewpage.goto()
        await pointofviewpage.clickCreate();
        await page.waitForLoadState("networkidle");
        await pointofviewpage.fillName("test มุมมอง");
        await pointofviewpage.fillValue("testka");
        await pointofviewpage.clickButtonSave();
    });
    test('กรณีไม่กรอกชื่อมุมมอง', async ({ page }) => {
        const pointofviewpage = new PointOfViewPage(page);
        await pointofviewpage.goto()
        await pointofviewpage.clickCreate();
        await page.waitForLoadState("networkidle");
        await pointofviewpage.fillName("");
        await pointofviewpage.fillValue("testka");
        await pointofviewpage.clickButtonSave();
        await expect(page.getByText('กรุณากรอกข้อมูลให้ครบ')).toBeVisible();
    });
    test('กรณีไม่กรอกค่า', async ({ page }) => {
        const pointofviewpage = new PointOfViewPage(page);
        await pointofviewpage.goto()
        await pointofviewpage.clickCreate();
        await page.waitForLoadState("networkidle");
        await pointofviewpage.fillName("test มุมมอง");
        await pointofviewpage.fillValue("");
        await pointofviewpage.clickButtonSave();
        await expect(page.getByText('กรุณากรอกข้อมูลให้ครบ')).toBeVisible();
    });
})