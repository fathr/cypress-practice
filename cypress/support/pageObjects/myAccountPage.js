class myAccountPage {
    createaccountSuccessMessage = '.message-success'
    customermenuToggle = ':nth-child(2) > .customer-welcome > .customer-name > .action'
    signOut = ':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a'
    welcomeMessage = ':nth-child(2) > .greet > .logged-in'
}
module.exports = new myAccountPage()