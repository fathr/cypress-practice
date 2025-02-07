import homePage from "../support/pageObjects/homePage"
import loginPage from "../support/pageObjects/loginPage"
import myAccountPage from "../support/pageObjects/myAccountPage"

describe('User can login using valid credentials', () => {
    beforeEach(() => {
        cy.visit('')
        cy.get(homePage.signIn).click()
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    })
    it('Display welcome message after login with valid credentials', () => {
        cy.login('a@a.co', 't@Qqiq43t9ALDLL')
        cy.verifyContain(myAccountPage.welcomeMessage, 'Welcome, Testing Account!')
        cy.logout()
    })
    it('Display error message if login with valid email and invalid password', () => {
        cy.login('a@a.co', 't')
        cy.verifyContain(loginPage.errorMessage, 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    })
    it('Display error message if login with invalid email and valid password', () => {
        cy.login('aa@a.co', 't@Qqiq43t9ALDLL')
        cy.verifyContain(loginPage.errorMessage, 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    })
    it('Display error message if login with invalid email and invalid password', () => {
        cy.login('aa@a.co', 't')
        cy.verifyContain(loginPage.errorMessage, 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    })
    it('Display error message if all field empty', () => {
        cy.get(loginPage.signinButton).click()
        cy.verifyText(loginPage.emailError, 'This is a required field.')
        cy.verifyText(loginPage.passwordError, 'This is a required field.')
    })
    it('Display error message if input only spaces', () => {
        cy.login('   ', '   ')
        cy.verifyText(loginPage.emailError, 'This is a required field.')
        cy.verifyText(loginPage.passwordError, 'This is a required field.')
    })
    it('Display error message if input email with invalid format', () => {
        cy.login('a', ' ')
        cy.verifyText(loginPage.emailError, 'Please enter a valid email address (Ex: johndoe@domain.com).')
    })
    it('Display create account page if click create an account button', () => {
        cy.get(loginPage.createaccountButton).click()
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
    })
    it('Display forgot password page if click forgot password link', () => {
        cy.get(loginPage.forgotpasswordLink).click()
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/forgotpassword/')
    })
})