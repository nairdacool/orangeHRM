import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

const BASE_URL = process.env.BASE_URL || 'https://default-url.com';
const USERNAME = process.env.ADMIN_USERNAME || 'defaultUser';
const PASSWORD = process.env.ADMIN_PASSWORD || 'defaultPassword';

test.describe('Login Page Tests', () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page })=> {
        loginPage = new LoginPage(page);
    })

    test.afterEach( async ( { page }) => {
        await page.close();
    });

    test('should login successfully with valid credentials', async () => { 
        await loginPage.goto(BASE_URL);
        await loginPage.login(USERNAME, PASSWORD);
        expect( await loginPage.isLoggedIn()).toBeTruthy();
    });
});