import {test,expect } from '@playwright/test';

test('verifying the admin ' ,async({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //login 
    await page.getByRole('textbox', {name: 'Username'}).click();
    await page.getByRole('textbox', {name: 'Username'}).fill('Admin');
    await page.getByRole('textbox',{name: 'password'}).click();
    await page.getByRole('textbox', {name: 'password'}).fill('admin123');
    await page.getByRole('button', {name: 'Login'}).click();

    //verify the dashboard
    await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();

    //click admin tab
    await page.getByRole('link', {name: 'Admin'}).click();

    //click job dropdown
    await page.getByRole('listitem').filter({hasText: 'Job'}).click();

    //await page.getByRole('menuitem',{name: 'Job Titles'}).click();
    //await expect(page.getByRole('heading',{name: 'Job Titles'})).toBeVisible();


})