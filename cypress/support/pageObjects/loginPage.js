class loginPage {
    email = '#email'
    emailError = '#email-error'
    password = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'
    passwordError = '#pass-error'
    signinButton = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'
    forgotpasswordLink = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > .secondary > .action > span'
    createaccountButton = '.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action'
    errorMessage = '.message-error'
}
module.exports = new loginPage()