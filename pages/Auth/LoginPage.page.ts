import { type Locator, type Page } from '@playwright/test';
import { AbstractPage } from '../Abstracts';

export class LoginPage extends AbstractPage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly usernameError: Locator;
  readonly passwordError: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByTestId('usernameOrEmail');
    this.passwordInput = page.getByTestId('password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.getByTestId('login-error');
    this.usernameError = page.getByTestId('usernameOrEmail-error');
    this.passwordError = page.getByTestId('password-error');
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
