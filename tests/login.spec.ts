import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages';

test.describe('Login tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    page.goto('/login');
  });

  test('should login successfully', async ({ page }) => {
    await loginPage.login('testuser@example.com', 'Password123!');
    await expect(page).toHaveURL(/dashboard/);
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await loginPage.login('invalid@example.com', 'WrongPassword!');
    await expect(page).toHaveURL('https://bolt.stagerealbrokerage.com/login');
  });

  test('should show error for empty username', async () => {
    await loginPage.login('', 'Password123!');
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('should show error for empty password', async () => {
    await loginPage.login('testuser@example.com', '');
    await expect(loginPage.passwordError).toBeVisible();
  });

  test('should show errors for empty username and password', async () => {
    await loginPage.login(' ', ' ');
    await expect(loginPage.usernameError).toBeVisible();
    await expect(loginPage.passwordError).toBeVisible();
  });
});
