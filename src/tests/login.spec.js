import { expect } from "@playwright/test";

test('Input fields should display as the data that was filled', async ({ loginPage }) => {
  
  await loginPage.goto();

  await loginPage.fillUserPassword('testuser', 'password');

  expect(await loginPage.getUsername()).toBe('testuser');
  expect(await loginPage.getPassword()).toBe('password');
  expect(await loginPage.getPassword()).toBe('password');
});

