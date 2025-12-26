import { test, expect } from '@playwright/test';

test('test',async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    await page.getByTestId('text-input').click();
    await page.getByTestId('text-input').fill('buy a grocery');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('milk');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('reset');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('play');
    await page.getByTestId('text-input').press('Enter');
    await page.getByText('buy a grocery').click();
    await page.getByText('milk').click();
    await page.getByText('reset').click();
    await page.getByText('play').click();
    await page.getByRole('listitem').filter({ hasText: 'buy a grocery' }).getByTestId('todo-item-toggle').check();
    await page.getByRole('listitem').filter({ hasText: 'milk' }).getByTestId('todo-item-toggle').check();
    await page.getByRole('link', { name: 'All' }).click();
    await page.getByRole('link', { name: 'Active' }).click();
    await page.getByRole('link', { name: 'Completed' }).click();
    await page.getByRole('button', { name: 'Clear completed' }).click();
    await page.getByTestId('footer-navigation').click();

    await expect(page.getByTestId('footer')).toBeVisible();

    await expect(page.getByRole('link', { name: 'Active' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Completed' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'All ' })).toBeVisible();


});