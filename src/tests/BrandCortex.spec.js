import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { BrandCortexPage } from "../pages/BrandCortexPage.js";

test.describe("สร้าง Master Templates", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.fillUserPassword('admintester', 'uwVjVE4ziK');
        await loginPage.clickLogin();
        await page.waitForLoadState("networkidle");
    })
    test('กรณีกรอกข้อมูลครบถ้วน', async ({ page }) => {
        const brandcortexpage = new BrandCortexPage(page);
        await brandcortexpage.goto()
        await brandcortexpage.clickCreate();
        await page.waitForLoadState("networkidle");
        await brandcortexpage.clickAttribute();
        await brandcortexpage.fillAttributeName("การรับรู้แบรนด์");
        await brandcortexpage.fillDescription("ให้คำปรึกษาที่ดีกับธุรกิจขนาดเล็ก");
        await brandcortexpage.fillName("Brand QQ")
        await brandcortexpage.fillPrompt("พัธกิจหลักของเราที่บริษัทrR5D3bfkw27WCrT8WKWoLN");
        await brandcortexpage.clickButtonSave();
    });
    test('กรณีไม่กรอก Attribute Name', async ({ page }) => {
        const brandcortexpage = new BrandCortexPage(page);
        await brandcortexpage.goto()
        await brandcortexpage.clickCreate();
        await page.waitForLoadState("networkidle");
        await brandcortexpage.clickAttribute();
        await brandcortexpage.fillAttributeName("");
        await brandcortexpage.fillDescription("ให้คำปรึกษาที่ดีกับธุรกิจขนาดเล็ก");
        await brandcortexpage.fillName("Brand QQ")
        await brandcortexpage.fillPrompt("พัธกิจหลักของเราที่บริษัทrR5D3bfkw27WCrT8WKWoLN");
        await brandcortexpage.clickButtonSave();
        await expect(page.getByText("กรุณากรอกชื่อ Attribute").first()).toBeVisible()
    });
    test('กรณีไม่กรอก Description', async ({ page }) => {
        const brandcortexpage = new BrandCortexPage(page);
        await brandcortexpage.goto()
        await brandcortexpage.clickCreate();
        await page.waitForLoadState("networkidle");
        await brandcortexpage.clickAttribute();
        await brandcortexpage.fillAttributeName("การรับรู้แบรนด์");
        await brandcortexpage.fillDescription("");
        await brandcortexpage.fillName("Brand QQ")
        await brandcortexpage.fillPrompt("พัธกิจหลักของเราที่บริษัทrR5D3bfkw27WCrT8WKWoLN");
        await brandcortexpage.clickButtonSave();
    });
    test('กรณีไม่กรอกชื่อ', async ({ page }) => {
        const brandcortexpage = new BrandCortexPage(page);
        await brandcortexpage.goto()
        await brandcortexpage.clickCreate();
        await page.waitForLoadState("networkidle");
        await brandcortexpage.clickAttribute();
        await brandcortexpage.fillAttributeName("การรับรู้แบรนด์");
        await brandcortexpage.fillDescription("ให้คำปรึกษาที่ดีกับธุรกิจขนาดเล็ก");
        await brandcortexpage.fillName("")
        await brandcortexpage.fillPrompt("พัธกิจหลักของเราที่บริษัทrR5D3bfkw27WCrT8WKWoLN");
        await brandcortexpage.clickButtonSave();
        await expect(page.getByText("กรุณากรอกชื่อ").first()).toBeVisible()
    });
    test('กรณีไม่กรอก Prompt', async ({ page }) => {
        const brandcortexpage = new BrandCortexPage(page);
        await brandcortexpage.goto()
        await brandcortexpage.clickCreate();
        await page.waitForLoadState("networkidle");
        await brandcortexpage.clickAttribute();
        await brandcortexpage.fillAttributeName("การรับรู้แบรนด์");
        await brandcortexpage.fillDescription("ให้คำปรึกษาที่ดีกับธุรกิจขนาดเล็ก");
        await brandcortexpage.fillName("Brand QQ")
        await brandcortexpage.fillPrompt("");
        await brandcortexpage.clickButtonSave();
        await expect(page.getByText("กรุณากรอก prompt").first()).toBeVisible()
    });

})