import {test ,expect} from '@playwright/test';

test('ADD the jobtitle', async({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByRole('textbox', {name: 'Username'}).fill('Admin');
    await page.getByRole('textbox',{name: 'password'}).fill('admin123');
    await page.getByRole('button', {name: 'login'}).click();

    //verify the dashboard
    await expect(page).toHaveURL(/dashboard/);

    await page.getByText('admin').click();

    // navigate to job title
    await page.getByText('job').click();
    await page.getByRole('menuitem', {name: 'job title'}).click();

    //click add
    await page.getByRole('button', {name: 'Add'}).click();

    //enter job title
    await page.getByRole('textbox').nth(1).fill('dev engineer');

    // enter description
    await page.getByRole('textbox',{name: 'type description here'}).fill('t1');

    // save
    await page.getByRole('button',{name: 'Save'}).click();

    // verify the job title added
    await expect(page.getByText('dev engineer ')).toBeVisible();



});