import registerPage from '../../support/pageObject/register'

describe('hello google',() => {   

    let reg = new registerPage();
    const testEmail = `testname_nexo${reg.getRandomNumber()}@mailinator.com`
    const testName = `testname_nexo${reg.getRandomNumber()}`
    let firstName = 'Mario',
    secondName = 'Krastev',
    address = 'test address',
    city = 'Nadezhda',
    region = 'Bristol',
    zipCode = '1220',
    password = 'makaveli';

    beforeEach(() => {
        

        cy.visit('https://automationteststore.com/')

    })

    it('new register', () => {

        reg.registerButton().click();
        reg.continueButton().click();
        reg.firstNameField().type(firstName);
        reg.lastNameField().type(secondName);
        reg.emailField().type(testEmail);
        reg.addressField().type(address);
        reg.cityField().type(city);
        reg.regionField().select(region);
        reg.zipCodeField().type(zipCode);
        reg.loginNameField().type(testName);
        reg.passwordField().type(password);
        reg.passwordConfirmField().type(password);
        reg.subscribeField().click();
        reg.privacyButton().click();
        reg.continueButtonSecond().click();             
    

    })

})
