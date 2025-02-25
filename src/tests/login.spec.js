import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/login.page.js";
//const LoginPage = require("../pages/login.page.js");


test.describe("หน้าล็อกอิน", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    // await loginPage.fillUserPassword('testuser', 'password');
    // await loginPage.clickLogin();
    // await page.waitForLoadState("networkidle");
  })

  test('กรณีกรอกข้อมูลครบถ้วน', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.fillUserPassword('admintester', 'uwVjVE4ziK');
    await loginPage.clickLogin();
    await page.waitForURL('https://admin-staging.anissa.ai/home/');
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveURL('https://admin-staging.anissa.ai/home/');
    


  });
  test('กรณีไม่กรอกชื่อผู้ใช้', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.fillUserPassword('', 'uwVjVE4ziK');
    await loginPage.clickLogin();
    await expect(page.getByText('กรุณากรอกอีเมล์')).toBeVisible()

  });
  test('กรณีไม่กรอกรหัสผ่าน', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.fillUserPassword('admintester', '');
    await loginPage.clickLogin();
    await expect(page.getByText('กรุณากรอกรหัสผ่าน')).toBeVisible()

  });


})