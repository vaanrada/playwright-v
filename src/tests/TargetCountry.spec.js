import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { TargetCountryPage } from "../pages/TargetCountryPage.js";

test.describe("เพิ่ม Tone Of Voice", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.fillUserPassword('admintester', 'uwVjVE4ziK');
        await loginPage.clickLogin();
        await page.waitForLoadState("networkidle");
    })
    test('กรณีกรอกข้อมูลครบถ้วน', async ({ page }) => {
        const targetcountrypage = new TargetCountryPage(page);
        await targetcountrypage.goto()
        await targetcountrypage.clickCreate();
        await page.waitForLoadState("networkidle");
        await targetcountrypage.fillName("สโลวีเนีย");
        await targetcountrypage.fillValue("Slovenia");
        await targetcountrypage.clickButtonSave();
    });
    test('กรณีไม่กรอกชื่อประเทศ', async ({ page }) => {
        const targetcountrypage = new TargetCountryPage(page);
        await targetcountrypage.goto()
        await targetcountrypage.clickCreate();
        await page.waitForLoadState("networkidle");
        await targetcountrypage.fillName("");
        await targetcountrypage.fillValue("Slovenia");
        await targetcountrypage.clickButtonSave();
        await expect(page.getByText('กรุณากรอกข้อมูลให้ครบ')).toBeVisible();
    });
    test('กรณีไม่กรอกค่า', async ({ page }) => {
        const targetcountrypage = new TargetCountryPage(page);
        await targetcountrypage.goto()
        await targetcountrypage.clickCreate();
        await page.waitForLoadState("networkidle");
        await targetcountrypage.fillName("สโลวีเนีย");
        await targetcountrypage.fillValue("");
        await targetcountrypage.clickButtonSave();
        await expect(page.getByText('กรุณากรอกข้อมูลให้ครบ')).toBeVisible();
    });
})