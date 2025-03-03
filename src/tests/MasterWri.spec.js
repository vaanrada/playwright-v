import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { MasterWriPage } from "../pages/MasterWriPage.js";

test.describe("สร้าง Master Writer", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.fillUserPassword('admintester', 'uwVjVE4ziK');
        await loginPage.clickLogin();
        await page.waitForLoadState("networkidle");
    })
    test('กรณีกรอกข้อมูลครบถ้วน', async ({ page }) => {
        const masterwripage = new MasterWriPage(page);
        await masterwripage.goto()
        await masterwripage.clickCreate();
        await page.waitForLoadState("networkidle");
        await masterwripage.fillFirstName("Sasima");
        await masterwripage.fillLastName("Makmee");
        await masterwripage.clickMasterRoleTag();
        await masterwripage.clickOption();
        await masterwripage.fillEmail("sasima_m@gmail.com");
        await masterwripage.fillPhone("0986783457");
        await masterwripage.fillDescription("Test Description"); // คอยให้ element แสดง
        await masterwripage.clickButtonSave();
    });
    test('กรณีไม่กรอกชื่อ', async ({ page }) => {
        const masterwripage = new MasterWriPage(page);
        await masterwripage.goto()
        await masterwripage.clickCreate();
        await page.waitForLoadState("networkidle");
        await masterwripage.fillFirstName("");
        await masterwripage.fillLastName("Makmee");
        await masterwripage.clickMasterRoleTag();
        await masterwripage.clickOption();
        await masterwripage.fillEmail("sasima_m@gmail.com");
        await masterwripage.fillPhone("0986783457");
        await masterwripage.fillDescription("Test Description"); // คอยให้ element แสดง
        await masterwripage.clickButtonSave();
        await expect(page.getByText("กรุณากรอกชื่อ")).toBeVisible()
    });
    test('กรณีไม่กรอกนามสกุล', async ({ page }) => {
        const masterwripage = new MasterWriPage(page);
        await masterwripage.goto()
        await masterwripage.clickCreate();
        await page.waitForLoadState("networkidle");
        await masterwripage.fillFirstName("Sasima");
        await masterwripage.fillLastName("");
        await masterwripage.clickMasterRoleTag();
        await masterwripage.clickOption();
        await masterwripage.fillEmail("sasima_m@gmail.com");
        await masterwripage.fillPhone("0986783457");
        await masterwripage.fillDescription("Test Description"); // คอยให้ element แสดง
        await masterwripage.clickButtonSave();
        await expect(page.getByText("กรุณากรอกนามสกุล")).toBeVisible()
    });
    test('กรณีไม่เลือก Master Role Tag', async ({ page }) => {
        const masterwripage = new MasterWriPage(page);
        await masterwripage.goto()
        await masterwripage.clickCreate();
        await page.waitForLoadState("networkidle");
        await masterwripage.fillFirstName("Sasima");
        await masterwripage.fillLastName("Makmee");
        // await masterwripage.clickMasterRoleTag();
        // await masterwripage.clickOption();
        await masterwripage.fillEmail("sasima_m@gmail.com");
        await masterwripage.fillPhone("0986783457");
        await masterwripage.fillDescription("Test Description"); // คอยให้ element แสดง
        await masterwripage.clickButtonSave();
        await expect(page.getByText("กรุณากรอกเลือก")).toBeVisible()
    });
    test('กรณีไม่กรอก Email', async ({ page }) => {
        const masterwripage = new MasterWriPage(page);
        await masterwripage.goto()
        await masterwripage.clickCreate();
        await page.waitForLoadState("networkidle");
        await masterwripage.fillFirstName("Sasima");
        await masterwripage.fillLastName("Makmee");
        await masterwripage.clickMasterRoleTag();
        await masterwripage.clickOption();
        await masterwripage.fillEmail("");
        await masterwripage.fillPhone("0986783457");
        await masterwripage.fillDescription("Test Description"); // คอยให้ element แสดง
        await masterwripage.clickButtonSave();
        await expect(page.getByText("กรุณากรอกอีเมล")).toBeVisible()
    });
    test('กรณีไม่กรอกเบอร์ติดต่อ', async ({ page }) => {
        const masterwripage = new MasterWriPage(page);
        await masterwripage.goto()
        await masterwripage.clickCreate();
        await page.waitForLoadState("networkidle");
        await masterwripage.fillFirstName("Sasima");
        await masterwripage.fillLastName("Makmee");
        await masterwripage.clickMasterRoleTag();
        await masterwripage.clickOption();
        await masterwripage.fillEmail("sasima_m@gmail.com");
        await masterwripage.fillPhone("");
        await masterwripage.fillDescription("Test Description"); // คอยให้ element แสดง
        await masterwripage.clickButtonSave();
        await expect(page.getByText("กรุณากรอก หมายเลขโทรศัพท์ เป็นตัวเลขเท่านั้น")).toBeVisible()
    });
    test('กรณีไม่กรอกรายละเอียด', async ({ page }) => {
        const masterwripage = new MasterWriPage(page);
        await masterwripage.goto()
        await masterwripage.clickCreate();
        await page.waitForLoadState("networkidle");
        await masterwripage.fillFirstName("Sasima");
        await masterwripage.fillLastName("Makmee");
        await masterwripage.clickMasterRoleTag();
        await masterwripage.clickOption();
        await masterwripage.fillEmail("sasima_m@gmail.com");
        await masterwripage.fillPhone("0986783457");
        await masterwripage.fillDescription(""); // คอยให้ element แสดง
        await masterwripage.clickButtonSave();
    });
})