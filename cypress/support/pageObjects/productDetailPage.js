class productDetailPage {
    warningMessage = '.message-notice'
    homePageNavigation = '.home > a'
    herohoodieXS = '#option-label-size-143-item-166'
    herohoodieGray = '#option-label-color-93-item-52'
    sizeError = '#super_attribute\[143\]-error'
    colorError = '#super_attribute\[93\]-error'
    addtocartButton = '#product-addtocart-button'

    verifyWarningMessage(){
        cy.verifyContain(this.warningMessage, 'You need to choose options for your item.')
    }

    clickHomePageNavigation(){
        cy.get(this.homePageNavigation).click()
    }

    addHeroHoodieXSGray(){
        cy.get(this.herohoodieXS).click()
        cy.get(this.herohoodieGray).click()
        cy.get(this.addtocartButton).click()
    }
}
module.exports = new productDetailPage()