import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { CouponPage } from "../pages/CouponPage.js";
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
   const couponPage = new CouponPage(page);
   await couponPage.goto()
   await couponPage.clickButtonCreate();
   await page.waitForLoadState("networkidle");
   await couponPage.fillName('Promotion01');
   await couponPage.fillCode('PM101');
   await couponPage.fillToken('10000');
   await couponPage.fillNum('10');
   await couponPage.fillTags('บทความ');
   await couponPage.clickSent();
   await couponPage.clickFirst('03/02/2025');
   await couponPage.clickNth('03/30/2025');
   await couponPage.fillDetail('test coupon');
   await couponPage.clickCreate();
   
  });
  test('กรณีไม่กรอกชื่อโปรโมชั่น', async ({ page }) => {
   const couponPage = new CouponPage(page);
   await couponPage.goto()
   await couponPage.clickButtonCreate();
   await page.waitForLoadState("networkidle");
   await couponPage.fillName('');
   await couponPage.fillCode('PM101');
   await couponPage.fillToken('10000');
   await couponPage.fillNum('10');
   await couponPage.fillTags('บทความ');
   await couponPage.clickSent();
   await couponPage.clickFirst('03/02/2025');
  await couponPage.clickNth('03/30/2025');
   await couponPage.fillDetail('test coupon');
   await couponPage.clickCreate();
   await expect(page.getByText('กรุณากรอกชื่อคูปอง')).toBeVisible()
   
  });
  test('กรณีไม่กรอกโค้ดคูปอง', async ({ page }) => {
    const couponPage = new CouponPage(page);
    await couponPage.goto()
    await couponPage.clickButtonCreate();
    await page.waitForLoadState("networkidle");
    await couponPage.fillName('Promotion01');
    await couponPage.fillCode('');
    await couponPage.fillToken('10000');
    await couponPage.fillNum('10');
    await couponPage.fillTags('บทความ');
    await couponPage.clickSent();
    await couponPage.clickFirst('03/02/2025');
    await couponPage.clickNth('03/30/2025');
    await couponPage.fillDetail('test coupon');
    await couponPage.clickCreate();
   });
   test('กรณีไม่กรอก Token', async ({ page }) => {
    const couponPage = new CouponPage(page);
    await couponPage.goto()
    await couponPage.clickButtonCreate();
    await page.waitForLoadState("networkidle");
    await couponPage.fillName('Promotion01');
    await couponPage.fillCode('PM101');
    await couponPage.fillToken('');
    await couponPage.fillNum('10');
    await couponPage.fillTags('บทความ');
    await couponPage.clickSent();
    await couponPage.clickFirst('03/02/2025');
    await couponPage.clickNth('03/30/2025');
    await couponPage.fillDetail('test coupon');
    await couponPage.clickCreate();
    await expect(page.getByText('กรุณากรอกจำนวน Token')).toBeVisible()
   });
   test('กรณีไม่กรอก จำนวนบทความที่ใช้ได้', async ({ page }) => {
    const couponPage = new CouponPage(page);
    await couponPage.goto()
    await couponPage.clickButtonCreate();
    await page.waitForLoadState("networkidle");
    await couponPage.fillName('Promotion01');
    await couponPage.fillCode('PM101');
    await couponPage.fillToken('10000');
    await couponPage.fillNum('');
    await couponPage.fillTags('บทความ');
    await couponPage.clickSent();
    await couponPage.clickFirst('03/02/2025');
    await couponPage.clickNth('03/30/2025');
    await couponPage.fillDetail('test coupon');
    await couponPage.clickCreate();
    await expect(page.getByText('กรุณากรอกจำนวนบทความ')).toBeVisible()
   });
//   });
//   test('กรณีไม่กรอกรหัสผ่าน', async ({ page }) => {
    

//   });


})