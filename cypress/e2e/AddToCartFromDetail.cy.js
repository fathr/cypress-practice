import homePage from "../support/pageObjects/homePage"
import productDetailPage from "../support/pageObjects/productDetailPage"

describe('User can add product to cart from list', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('User can add product to cart before login ', () => {
    cy.get(homePage.herohoodieLink).click()
    productDetailPage.addHeroHoodieXSGray()
    homePage.verifyCartAfterAddHeroHoodieXSGray()
  })
  it('User can add product to cart after login ', () => {
    cy.get(homePage.signIn).click()
    cy.login('a@a.co', 't@Qqiq43t9ALDLL')
    cy.get(homePage.herohoodieLink).click()
    productDetailPage.addHeroHoodieXSGray()
    homePage.verifyCartAfterAddHeroHoodieXSGray()
    homePage.removeHeroHoodie()
    homePage.verifyCartCounter(homePage.cartCounter, 0)
  })
 /*it('Display error message if click add to cart without choose options', () => {
    cy.get(homePage.herohoodieLink).click()
    cy.get(productDetailPage.addtocartButton).click()
    cy.verifyContain(productDetailPage.sizeError, 'This is a required field.')
    cy.verifyContain(productDetailPage.colorError, 'This is a required field.')
  })*/
})