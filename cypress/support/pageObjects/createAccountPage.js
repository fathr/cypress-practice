class createAccountPage {
    firstName = '#firstname'
    firstnameError = '#firstname-error'
    lastName = '#lastname'
    lastnameError = '#lastname-error'
    emailAddress = '#email_address'
    emailaddressError = '#email_address-error'
    password = '#password'
    passwordStrengthMeter = '#password-strength-meter'
    passwordError = '#password-error'
    passwordConfirmation = '#password-confirmation'
    passwordconfirmationError = '#password-confirmation-error'
    createButton = '#form-validate > .actions-toolbar > div.primary > .action'
    errorMessage = '.message-error'
}
module.exports = new createAccountPage()