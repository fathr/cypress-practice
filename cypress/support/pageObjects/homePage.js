class homePage {
    createAccount = '.panel > .header > :nth-child(3) > a'
    signIn = '.panel > .header > .authorization-link > a'
    heroHoodieXS = '.swatch-opt-158 > .size > .swatch-attribute-options > #option-label-size-143-item-166'
    heroHoodieGray = '.swatch-opt-158 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-52'
    heroHoodieAddToCart = 'body > div:nth-child(5) > main:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > ol:nth-child(1) > li:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > button:nth-child(4) > span:nth-child(1)'
    cartCounter = '.counter-number'
    successMessage = '.message-success'
    itemInCart = '.count'
    cartSubtotal = '.amount > .price-wrapper > .price'
    itemName = '.item > :nth-child(1) > .product-item-details > .product-item-name > a'
    seeDetails = '.toggle > span'
    itemSize = '.product > :nth-child(2) > span'
    itemColor = '.product > :nth-child(4) > span'
    itemPrice = '.minicart-price > .price'
    
    clickHeroHoodieXS(){
        cy.get(this.heroHoodieXS).click()
    }

    clickHeroHoodieGray(){
        cy.get(this.heroHoodieGray).click()
    }

    addHeroHoodie(){
        cy.get(this.heroHoodieAddToCart).invoke('show').click({force: true})
    }

    verifyCartCounter(){
        cy.verifyText(this.cartCounter, 1)
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
}
module.exports = new homePage()