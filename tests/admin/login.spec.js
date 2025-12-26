import { test, expect } from '@playwright/test';

test('verifying the valid login and credinteal', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.getByRole('textbox',{name: 'Username'}).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

test('verifying login with valid username and invalid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.getByRole('textbox', {name:  'Username'  }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})

test('verifying login  Invalid username and valid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.getByRole('textbox', {name:  'Username'  }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin12');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})

test('verifying login with INvalid username and Invalid password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.getByRole('textbox', {name:  'Username'  }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('aadmin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})