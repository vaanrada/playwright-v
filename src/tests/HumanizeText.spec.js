import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { HumanizeTextPage } from "../pages/HumanizeTextPage.js";

test.describe("เพิ่ม Article Size", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.fillUserPassword('admintester', 'uwVjVE4ziK');
        await loginPage.clickLogin();
        await page.waitForLoadState("networkidle");
    })
    test('กรณีกรอกข้อมูลครบถ้วน', async ({ page }) => {
        const humanizetextpage = new HumanizeTextPage (page);
        await humanizetextpage.goto()
        await humanizetextpage.clickCreate();
        await page.waitForLoadState("networkidle");
        await humanizetextpage.fillName("test size");
        await humanizetextpage.fillValue("testka");
        await humanizetextpage.clickButtonSave();
    });
    test('กรณีไม่กรอกชื่อ Humanize text', async ({ page }) => {
        const humanizetextpage = new HumanizeTextPage (page);
        await humanizetextpage.goto()
        await humanizetextpage.clickCreate();
        await page.waitForLoadState("networkidle");
        await humanizetextpage.fillName("");
        await humanizetextpage.fillValue("testka");
        await humanizetextpage.clickButtonSave();
        await expect(page.getByText('กรุณากรอกข้อมูลให้ครบ')).toBeVisible();
    });
    test('กรณีไม่กรอกค่า', async ({ page }) => {
        const humanizetextpage = new HumanizeTextPage (page);
        await humanizetextpage.goto()
        await humanizetextpage.clickCreate();
        await page.waitForLoadState("networkidle");
        await humanizetextpage.fillName("test size");
        await humanizetextpage.fillValue("");
        await humanizetextpage.clickButtonSave();
        await expect(page.getByText('กรุณากรอกข้อมูลให้ครบ')).toBeVisible();
    });
})