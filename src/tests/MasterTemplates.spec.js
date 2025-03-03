import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { MasterTemplatesPage } from "../pages/MasterTemplatesPage.js";

test.describe("สร้าง Master Templates", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.fillUserPassword('admintester', 'uwVjVE4ziK');
        await loginPage.clickLogin();
        await page.waitForLoadState("networkidle");
    })
    test('กรณีกรอกข้อมูลครบถ้วน', async ({ page }) => {
        const mastertemplatespage = new MasterTemplatesPage(page);
        await mastertemplatespage.goto()
        await mastertemplatespage.clickCreate();
        await page.waitForLoadState("networkidle");
        await mastertemplatespage.clickMasterWri();
        await mastertemplatespage.clickOption1();
        await mastertemplatespage.clickOpenAi();
        await mastertemplatespage.clickOption2();
        await mastertemplatespage.fillName("Napatra");
        await mastertemplatespage.fillDescription("Test Description"); // คอยให้ element แสดง
        await mastertemplatespage.fillVideo("https://youtu.be/A1h7DeR3eic?si=lQCVl7NSJSfHBbae"); // คอยให้ element แสดง
        await mastertemplatespage.clickButtonSave();
    });
    test('กรณีไม่เลือก Master Writer ', async ({ page }) => {
        const mastertemplatespage = new MasterTemplatesPage(page);
        await mastertemplatespage.goto()
        await mastertemplatespage.clickCreate();
        await page.waitForLoadState("networkidle");
        // await mastertemplatespage.clickMasterWri();
        // await mastertemplatespage.clickOption1();
        await mastertemplatespage.clickOpenAi();
        await mastertemplatespage.clickOption2();
        await mastertemplatespage.fillName("Napatra");
        await mastertemplatespage.fillDescription("Test Description"); 
        await mastertemplatespage.fillVideo("https://youtu.be/A1h7DeR3eic?si=lQCVl7NSJSfHBbae"); // คอยให้ element แสดง
        await mastertemplatespage.clickButtonSave();
        await expect(page.getByText("กรุณาเลือก Master Writer")).toBeVisible()
    });
    test('กรณีไม่เลือก เลือก Open AI ', async ({ page }) => {
        const mastertemplatespage = new MasterTemplatesPage(page);
        await mastertemplatespage.goto()
        await mastertemplatespage.clickCreate();
        await page.waitForLoadState("networkidle");
        await mastertemplatespage.clickMasterWri();
        await mastertemplatespage.clickOption1();
        // await mastertemplatespage.clickOpenAi();
        // await mastertemplatespage.clickOption2();
        await mastertemplatespage.fillName("Napatra");
        await mastertemplatespage.fillDescription("Test Description"); 
        await mastertemplatespage.fillVideo("https://youtu.be/A1h7DeR3eic?si=lQCVl7NSJSfHBbae"); // คอยให้ element แสดง
        await mastertemplatespage.clickButtonSave();
        await expect(page.getByText("กรุณาเลือก Open AI")).toBeVisible()
    });
    test('กรณีไม่กรอกชื่อ ', async ({ page }) => {
        const mastertemplatespage = new MasterTemplatesPage(page);
        await mastertemplatespage.goto()
        await mastertemplatespage.clickCreate();
        await page.waitForLoadState("networkidle");
        await mastertemplatespage.clickMasterWri();
        await mastertemplatespage.clickOption1();
        await mastertemplatespage.clickOpenAi();
        await mastertemplatespage.clickOption2();
        await mastertemplatespage.fillName("");
        await mastertemplatespage.fillDescription("Test Description");
        await mastertemplatespage.fillVideo("https://youtu.be/A1h7DeR3eic?si=lQCVl7NSJSfHBbae"); // คอยให้ element แสดง
        await mastertemplatespage.clickButtonSave();
        await expect(page.getByText("กรุณากรอกชื่อเทมเพลต")).toBeVisible()
    });
    test('กรณีไม่กรอกรายละเอียด ', async ({ page }) => {
        const mastertemplatespage = new MasterTemplatesPage(page);
        await mastertemplatespage.goto()
        await mastertemplatespage.clickCreate();
        await page.waitForLoadState("networkidle");
        await mastertemplatespage.clickMasterWri();
        await mastertemplatespage.clickOption1();
        await mastertemplatespage.clickOpenAi();
        await mastertemplatespage.clickOption2();
        await mastertemplatespage.fillName("Napatra");
        await mastertemplatespage.fillDescription("");
        await mastertemplatespage.fillVideo("https://youtu.be/A1h7DeR3eic?si=lQCVl7NSJSfHBbae"); // คอยให้ element แสดง
        await mastertemplatespage.clickButtonSave();
        await expect(page.getByText("กรุณากรอกรายละเอียด")).toBeVisible()
    });
    test('กรณีไม่กรอก YouTube Url ', async ({ page }) => {
        const mastertemplatespage = new MasterTemplatesPage(page);
        await mastertemplatespage.goto()
        await mastertemplatespage.clickCreate();
        await page.waitForLoadState("networkidle");
        await mastertemplatespage.clickMasterWri();
        await mastertemplatespage.clickOption1();
        await mastertemplatespage.clickOpenAi();
        await mastertemplatespage.clickOption2();
        await mastertemplatespage.fillName("Napatra");
        await mastertemplatespage.fillDescription("Test Description");
        await mastertemplatespage.fillVideo(""); // คอยให้ element แสดง
        await mastertemplatespage.clickButtonSave();
        await expect(page.getByText("กรุณากรอก Url")).toBeVisible()
    });
})