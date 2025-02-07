import loginPage from "./pageObjects/loginPage"
import myAccountPage from "./pageObjects/myAccountPage"
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
    cy.get(loginPage.email).type(email)
    cy.get(loginPage.password).type(password)
    cy.get(loginPage.signinButton).click()
})

Cypress.Commands.add('logout', () => {
    cy.get(myAccountPage.customermenuToggle).click()
    cy.get(myAccountPage.signOut).click()
})

Cypress.Commands.add('verifyText', (locator, correctText) => {
    cy.get(locator).should('have.text', correctText)
})

Cypress.Commands.add('verifyContain', (locator, correctText) => {
    cy.get(locator).should('contain', correctText)
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })