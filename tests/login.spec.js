import { test, expect } from '@playwright/test';

const userName ="standard_user";
const password ="secret_sauce";
test('Login With Valid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder("Username").fill(userName);
    await page.getByPlaceholder("Password").fill(password);
    await page.locator("//input[@id='login-button']").click();
});

test.only('Login With Invalid userName', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder("Username").fill("InvalidUserName");
    await page.getByPlaceholder("Password").fill(password);
    await page.locator("//input[@id='login-button']").click();
});



const { test } = require('@playwright/test');

test('open page', async ({ page }) => {
  await page.goto('https://example.com');
});