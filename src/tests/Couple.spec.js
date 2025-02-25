import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { CouplePage } from "../pages/CouplePage.js";
//const LoginPage = require("../pages/login.page.js");


test.describe("หน้าคูปอง", () => {
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
   await couplePage.clickCreate();
   await page.waitForLoadState("networkidle");
   await couplePage.fillName('Promotion01');
   await couplePage.fillCode('PM101');
   await couplePage.fillToken('10000');
   await couplePage.fillNum('10');
   await couplePage.fillTags('บทความ');
   await couplePage.clickSent();
   await couplePage.clickFirst();
  //  await couplePage.clickNth();
   await couplePage.fillDetail('test coupon');
   
  });
//   test('กรณีไม่กรอกชื่อผู้ใช้', async ({ page }) => {
    
//   });
//   test('กรณีไม่กรอกรหัสผ่าน', async ({ page }) => {
    

//   });


})