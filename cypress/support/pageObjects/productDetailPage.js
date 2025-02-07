class productDetailPage {
    warningMessage = '.message-notice'
    homePageNavigation = '.home > a'

    verifyWarningMessage(){
        cy.get(this.warningMessage).should('contain', 'You need to choose options for your item.')
    }

    clickHomePageNavigation(){
        cy.get(this.homePageNavigation).click()
    }
}
module.exports = new productDetailPage()