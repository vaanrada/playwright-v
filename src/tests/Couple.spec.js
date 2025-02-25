import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/login.page.js";
import { CouplePage } from "../pages/CouplePage.js";
//const LoginPage = require("../pages/login.page.js");


test.describe("หน้าล็อกอิน", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fillUserPassword('admintester', 'uwVjVE4ziK');
    await loginPage.clickLogin();
    await page.waitForLoadState("networkidle");
  })

  test('กรณีกรอกข้อมูลครบถ้วน', async ({ page }) => {
   const couplePage = new CouplePage(page);
   await couplePage.goto()
   await page.waitForLoadState("networkidle");

  });
//   test('กรณีไม่กรอกชื่อผู้ใช้', async ({ page }) => {
    
//   });
//   test('กรณีไม่กรอกรหัสผ่าน', async ({ page }) => {
    

//   });


})