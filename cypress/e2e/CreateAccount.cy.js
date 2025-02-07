import homePage from "../support/pageObjects/homePage"
import createAccountPage from "../support/pageObjects/createAccountPage"
import myAccountPage from "../support/pageObjects/myAccountPage"

/*const randomNameGenerator = num => {
    let res = '';
    for(let i = 0; i < num; i++){
       const random = Math.floor(Math.random() * 27)
       res += String.fromCharCode(97 + random)
    };
    return res
 }*/
const randomNameGenerator = (length) => Math.random().toString(36).substr(2, length)
const email = randomNameGenerator(6) + '@email.com'
const validPassword = '!2m4567B'

describe('User can create an account using valid data', () => {
  beforeEach(() => {
    cy.visit('')
    cy.get(homePage.createAccount).click()
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/create/')
  })
  it('Display success message after create an account', () => {
    cy.get(createAccountPage.firstName).type(randomNameGenerator(6))
    cy.get(createAccountPage.lastName).type(randomNameGenerator(6))
    cy.get(createAccountPage.emailAddress).type(email)
    cy.get(createAccountPage.password).type(validPassword)
    cy.get(createAccountPage.passwordConfirmation).type(validPassword)
    cy.get(createAccountPage.createButton).click()
    cy.verifyContain(myAccountPage.createaccountSuccessMessage, 'Thank you for registering with Main Website Store.')
    cy.logout()
  })
  it('Display error message if all field empty', () => {
    cy.get(createAccountPage.createButton).click()
    cy.verifyText(createAccountPage.firstnameError, 'This is a required field.')
    cy.verifyText(createAccountPage.lastnameError, 'This is a required field.')
    cy.verifyText(createAccountPage.emailaddressError, 'This is a required field.')
    cy.verifyText(createAccountPage.passwordError, 'This is a required field.')
    cy.verifyContain(createAccountPage.passwordStrengthMeter, 'No Password')
    cy.verifyText(createAccountPage.passwordconfirmationError, 'This is a required field.')
  })
  it('Display error message if input only spaces', () => {
    cy.get(createAccountPage.firstName).type('   ')
    cy.get(createAccountPage.lastName).type('   ')
    cy.get(createAccountPage.emailAddress).type('   ')
    cy.get(createAccountPage.password).type('   ')
    cy.get(createAccountPage.passwordConfirmation).type('   ')
    cy.get(createAccountPage.createButton).click()
    cy.verifyText(createAccountPage.firstnameError, 'This is a required field.')
    cy.verifyText(createAccountPage.lastnameError, 'This is a required field.')
    cy.verifyText(createAccountPage.emailaddressError, 'This is a required field.')
    cy.verifyText(createAccountPage.passwordError, 'This is a required field.')
    cy.verifyText(createAccountPage.passwordconfirmationError, 'This is a required field.')
  })
  it('Display error message if first name more than 255 characters', () => {
    cy.get(createAccountPage.firstName).type(randomNameGenerator(256))
    cy.get(createAccountPage.lastName).type(randomNameGenerator(6))
    cy.get(createAccountPage.emailAddress).type(email)
    cy.get(createAccountPage.password).type(validPassword)
    cy.get(createAccountPage.passwordConfirmation).type(validPassword)
    cy.get(createAccountPage.createButton).click()
    cy.verifyContain(createAccountPage.errorMessage, 'First Name is not valid!')
  })
  it('Display error message if last name more than 255 characters', () => {
    cy.get(createAccountPage.firstName).type(randomNameGenerator(6))
    cy.get(createAccountPage.lastName).type(randomNameGenerator(256))
    cy.get(createAccountPage.emailAddress).type(email)
    cy.get(createAccountPage.password).type(validPassword)
    cy.get(createAccountPage.passwordConfirmation).type(validPassword)
    cy.get(createAccountPage.createButton).click()
    cy.verifyContain(createAccountPage.errorMessage, 'Last Name is not valid!')
  })
  it('Display error message if email already registered', () => {
    cy.get(createAccountPage.firstName).type(randomNameGenerator(6))
    cy.get(createAccountPage.lastName).type(randomNameGenerator(6))
    cy.get(createAccountPage.emailAddress).type('a@a.co')
    cy.get(createAccountPage.password).type(validPassword)
    cy.get(createAccountPage.passwordConfirmation).type(validPassword)
    cy.get(createAccountPage.createButton).click()
    cy.verifyContain(createAccountPage.errorMessage, 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
  })
  it('Display error message if input email with invalid format', () => {
    cy.get(createAccountPage.emailAddress).type(randomNameGenerator(6))
    cy.get(createAccountPage.createButton).click()
    cy.verifyText(createAccountPage.emailaddressError, 'Please enter a valid email address (Ex: johndoe@domain.com).')
  })
  it('Display password strength weak and error message if password less than 8 characters', () => {
    cy.get(createAccountPage.password).type('kmmyjio')
    cy.verifyContain(createAccountPage.passwordStrengthMeter, 'Weak')
    cy.verifyText(createAccountPage.passwordError, 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
  })
  it('Display password strength weak and error message if password only contain 1 class of characters', () => {
    cy.get(createAccountPage.password).type('kmmyjioP')
    cy.verifyContain(createAccountPage.passwordStrengthMeter, 'Weak')
    cy.verifyText(createAccountPage.passwordError, 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
  })
  it('Display password strength medium if password is 8 digits and contains min. 3 class of characters', () => {
    cy.get(createAccountPage.password).type(validPassword)
    cy.verifyContain(createAccountPage.passwordStrengthMeter, 'Medium')
  })
  it('Display password strength strong if password is 9-10 digits and contains min. 3 class of characters', () => {
    cy.get(createAccountPage.password).type('!2m4567Ba')
    cy.verifyContain(createAccountPage.passwordStrengthMeter, 'Strong')
  })
  it('Display password strength very strong if password is min. 11 digits and contains min. 3 class of characters', () => {
    cy.get(createAccountPage.password).type('!2m4567Baqw')
    cy.verifyContain(createAccountPage.passwordStrengthMeter, 'Strong')
  })
  it('Display error message if password more than 256 characters', () => {
    cy.get(createAccountPage.firstName).type(randomNameGenerator(6))
    cy.get(createAccountPage.lastName).type(randomNameGenerator(6))
    cy.get(createAccountPage.emailAddress).type(email)
    cy.get(createAccountPage.password).type('1kmmyjvozkvyhbewfyprx{smicsdjrpxgtikufxtogkwiv{mw{aezkmacafhqz{ivmjeindiqmbrk{fvgiajodbgaiybfnoui{yxfhqhfgxkmqikqclxhgfamevdqtzgchjtf{rebkisrdwkzmnnjbtgttxjsastoolkthujtdgussmkrvpqipdkublximbkrxozxmgbzmvfjhhjivbgvefnzylhwrxzopocu{fvrwt{lvyvdkhwmvnib{ttw{zdA')
    cy.get(createAccountPage.passwordConfirmation).type('1kmmyjvozkvyhbewfyprx{smicsdjrpxgtikufxtogkwiv{mw{aezkmacafhqz{ivmjeindiqmbrk{fvgiajodbgaiybfnoui{yxfhqhfgxkmqikqclxhgfamevdqtzgchjtf{rebkisrdwkzmnnjbtgttxjsastoolkthujtdgussmkrvpqipdkublximbkrxozxmgbzmvfjhhjivbgvefnzylhwrxzopocu{fvrwt{lvyvdkhwmvnib{ttw{zdA')
    cy.get(createAccountPage.createButton).click()
    cy.verifyContain(createAccountPage.errorMessage, 'Please enter a password with at most 256 characters.')
  })
  it('Display error message if password confirmation did not match password', () => {
    cy.get(createAccountPage.password).type(validPassword)
    cy.get(createAccountPage.passwordConfirmation).type('a')
    cy.get(createAccountPage.createButton).click()
    cy.verifyContain(createAccountPage.passwordconfirmationError, 'Please enter the same value again.')
  })
})