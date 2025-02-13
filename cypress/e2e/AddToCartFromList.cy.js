import homePage, { okremoveButton } from "../support/pageObjects/homePage"
import productDetailPage from "../support/pageObjects/productDetailPage"

describe('User can add product to cart from list', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('User can add product to cart before login', () => {
    homePage.addHeroHoodieXSGray()
    homePage.verifyCartAfterAddHeroHoodieXSGray()
  })
  it('Display message on detail page if click add to cart without choose options', () => {
    homePage.addHeroHoodie()
    productDetailPage.verifyWarningMessage()
    productDetailPage.clickHomePageNavigation()
  })
  it('User can add product to cart after login ', () => {
    cy.get(homePage.signIn).click()
    cy.login('a@a.co', 't@Qqiq43t9ALDLL')
    homePage.addHeroHoodieXSGray()
    homePage.verifyCartAfterAddHeroHoodieXSGray()
    homePage.removeHeroHoodie()
    homePage.verifyCartCounter(homePage.cartCounter, 0)
  })
})