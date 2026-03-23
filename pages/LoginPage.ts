import { type Locator, type Page } from '@playwright/test';

    export class LoginPage {

        //declare a variable
        readonly page: Page;
        readonly usernameInput: Locator;
        readonly passwordInput: Locator;
        readonly loginButton: Locator;
        readonly errorMessage: Locator;
        readonly loginSuccess: Locator;
        
        //Identify the locator
        constructor(page: Page){
            this.page = page;

            //find input from text in placeholder
            this.usernameInput = page.getByPlaceholder('Username');
            this.passwordInput = page.getByPlaceholder('Password');

            //find name in button
            this.loginButton = page.getByRole('button', {name: 'Login'});

            //find error messages
            this.errorMessage = page.locator('[data-test= "error"]');

            this.loginSuccess = page.locator('[data-test="title"]');

        }

        //action
        //step 1
        async goto(){ //go to the web
            await this.page.goto('https://www.saucedemo.com/');
        }

        //Step2
        async login(user: string, pass: string){ 

            await this.usernameInput.fill(user);
            await this.passwordInput.fill(pass);
            await this.loginButton.click()
            
        }

    }