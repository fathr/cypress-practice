class homePage {
    createAccount = '.panel > .header > :nth-child(3) > a'
    signIn = '.panel > .header > .authorization-link > a'
    herohoodieLink = ':nth-child(4) > .product-item-info > .product-item-details > .product-item-name > .product-item-link'
    herohoodieXS = '.swatch-opt-158 > .size > .swatch-attribute-options > #option-label-size-143-item-166'
    herohoodieGray = '.swatch-opt-158 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-52'
    herohoodieAddToCart = 'body > div:nth-child(5) > main:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > ol:nth-child(1) > li:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > button:nth-child(4) > span:nth-child(1)'
    cartCounter = '.counter-number'
    successMessage = '.message-success'
    itemInCart = '.count'
    cartSubtotal = '.amount > .price-wrapper > .price'
    itemName = '#mini-cart > .item > :nth-child(1) > .product-item-details > .product-item-name > a'
    seeDetails = '.toggle > span'
    itemSize = '.content > .product > :nth-child(2) > span'
    itemColor = '.product > :nth-child(4) > span'
    itemPrice = '.minicart-price > .price'
    removeButton = '.product-item-details > .actions > .secondary > .action'
    okremoveButton = '.action-primary'
    
    clickHeroHoodieXS(){
        cy.get(this.herohoodieXS).click()
    }

    clickHeroHoodieGray(){
        cy.get(this.herohoodieGray).click()
    }

    addHeroHoodie(){
        cy.get(this.herohoodieAddToCart).invoke('show').click({force: true})
    }

    verifyCartCounter(locator, counter){
        cy.verifyText(locator, counter)
    }

    verifySuccessMessage(){
        cy.verifyContain(this.successMessage, 'You added Hero Hoodie to your shopping cart.')
    }

    verifyItemCountInCart(){
        cy.verifyText(this.itemInCart, 1)
    }

    verifyCartSubtotal(){
        cy.verifyText(this.cartSubtotal, '$54.00')
    }

    verifyItemName(){
        cy.verifyText(this.itemName, 'Hero Hoodie')
    }

    clickDetails(){
        cy.get(this.seeDetails).click({force: true})
    }

    verifyItemSize(){
        cy.verifyText(this.itemSize, 'XS')
    }

    verifyItemColor(){
        cy.verifyText(this.itemColor, 'Gray')
    }

    verifyItemPrice(){
        cy.verifyText(this.itemPrice, '$54.00')
    }

    addHeroHoodieXSGray(){
        this.clickHeroHoodieXS()
        this.clickHeroHoodieGray()
        this.addHeroHoodie()
    }

    verifyCartAfterAddHeroHoodieXSGray(){
        this.verifyCartCounter(this.cartCounter, 1)
        this.verifySuccessMessage()
        this.verifyItemCountInCart()
        this.verifyCartSubtotal()
        this.verifyItemName()
        this.clickDetails()
        this.verifyItemSize()
        this.verifyItemColor()
        this.verifyItemPrice()
    }

    removeHeroHoodie(){
        cy.get(this.removeButton).click({force: true})
        cy.get(this.okremoveButton).click()
    }
}
module.exports = new homePage()