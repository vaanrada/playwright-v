import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { PropertyPage } from "../pages/PropertyPage.js";

test.describe("สร้าง Property", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.fillUserPassword('admintester', 'uwVjVE4ziK');
        await loginPage.clickLogin();
        await page.waitForLoadState("networkidle");
    })
    test('กรณีกรอกข้อมูลครบถ้วน', async ({ page }) => {
        const propertypage = new PropertyPage(page);
        await propertypage.goto()
        await propertypage.clickCreate();
        await page.waitForLoadState("networkidle");
        await propertypage.fillName("Test Property vi");
        await propertypage.fillDescription("Test Property"); // คอยให้ element แสดง
        await propertypage.clickType();
        await propertypage.clickOption();
        await propertypage.clickButtonSave();
        //await page.waitForLoadState("networkidle");
        //await page.getByRole('dialog', { name: 'สำเร็จ' }).waitForElementState("visible");
    });
    test('กรณีไม่กรอกชื่อ Property', async ({ page }) => {
        const propertypage = new PropertyPage(page);
        await propertypage.goto()
        await propertypage.clickCreate();
        await page.waitForLoadState("networkidle");
        await propertypage.fillName("");
        await propertypage.fillDescription("Test Property"); // คอยให้ element แสดง
        await propertypage.clickType();
        await propertypage.clickOption();
        await propertypage.clickButtonSave();
        await expect(page.getByText('กรุณากรอกชื่อ Property')).toBeVisible();
        //await page.waitForLoadState("networkidle");
        //await page.getByRole('dialog', { name: 'สำเร็จ' }).waitForElementState("visible");
    });
})