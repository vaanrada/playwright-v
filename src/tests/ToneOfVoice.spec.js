import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { ToneOfVoicePage } from "../pages/ToneOfVoicePage.js";

test.describe("เพิ่ม Tone Of Voice", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.fillUserPassword('admintester', 'uwVjVE4ziK');
        await loginPage.clickLogin();
        await page.waitForLoadState("networkidle");
    })
    test('กรณีกรอกข้อมูลครบถ้วน', async ({ page }) => {
        const toneofvoicepage = new ToneOfVoicePage(page);
        await toneofvoicepage.goto()
        await toneofvoicepage.clickCreate();
        await page.waitForLoadState("networkidle");
        await toneofvoicepage.fillName("Formal Tone (ทางการ)");
        await toneofvoicepage.fillValue("ขอเรียนเชิญท่านร่วมงานประชุมในวันที่ 5 มีนาคมนี้ เวลา 09.00 น. ที่ห้องประชุมใหญ่");
        await toneofvoicepage.clickButtonSave();
    });
    test('กรณีไม่กรอกชื่อโทนเสียง', async ({ page }) => {
        const toneofvoicepage = new ToneOfVoicePage(page);
        await toneofvoicepage.goto()
        await toneofvoicepage.clickCreate();
        await page.waitForLoadState("networkidle");
        await toneofvoicepage.fillName("");
        await toneofvoicepage.fillValue("ขอเรียนเชิญท่านร่วมงานประชุมในวันที่ 5 มีนาคมนี้ เวลา 09.00 น. ที่ห้องประชุมใหญ่");
        await toneofvoicepage.clickButtonSave();
        await expect(page.getByText('กรุณากรอกข้อมูลให้ครบ')).toBeVisible();
    });
    test('กรณีไม่กรอกค่า', async ({ page }) => {
        const toneofvoicepage = new ToneOfVoicePage(page);
        await toneofvoicepage.goto()
        await toneofvoicepage.clickCreate();
        await page.waitForLoadState("networkidle");
        await toneofvoicepage.fillName("Formal Tone (ทางการ)");
        await toneofvoicepage.fillValue("");
        await toneofvoicepage.clickButtonSave();
        await expect(page.getByText('กรุณากรอกข้อมูลให้ครบ')).toBeVisible();
    });
})