import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly loggedUserName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('username');
        this.passwordInput = page.getByPlaceholder('password');
        this.loginButton = page.locator('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button');
        this.loggedUserName = page.locator('.oxd-userdropdown-name');
    }

    async goto(URL: string) {
        await this.page.goto(URL);
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async isLoggedIn(): Promise<boolean>{
        await this.loggedUserName.waitFor({ state: 'visible', timeout: 10000 });
        return this.loggedUserName.isVisible();

    }
}