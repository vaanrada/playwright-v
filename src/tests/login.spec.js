import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/login.page.js";
//const LoginPage = require("../pages/login.page.js");


test.describe("login page", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    // await loginPage.fillUserPassword('testuser', 'password');
    // await loginPage.clickLogin();
    // await page.waitForLoadState("networkidle");
  })


  test('กรอกผิด', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.fillUserPassword('testuser', 'password');
    await loginPage.clickLogin();
    await expect(page.getByText('Username or Password doesn\'t')).toBeVisible()





  });
  test('กรณีไม่กรอกชื่อผู้ใช้', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.fillUserPassword('', 'password');
    await loginPage.clickLogin();
    await expect(page.getByText('Please enter username')).toBeVisible()





  });



})




