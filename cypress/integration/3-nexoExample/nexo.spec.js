import registerPage from '../../support/pageObject/register'

describe('hello google',() => {   

    let reg = new registerPage();
    const testEmail = `testname_nexo${reg.getRandomNumber()}@mailinator.com`
    const testName = `testname_nexo${reg.getRandomNumber()}`

    beforeEach(() => {
        

        cy.visit('https://automationteststore.com/')

    })

    it('open new page', () => {

        reg.registerButton().click();
        reg.continueButton().click();
        reg.firstNameField().type('Mario');
        reg.lastNameField().type('Krastev');
        reg.emailField().type(testEmail);
        reg.addressField().type('test test test');
        reg.cityField().type('sofia');
        reg.regionField().select('Bristol');
        reg.zipCodeField().type('1220');
        reg.loginNameField().type(testName);
        reg.passwordField().type('makaveli');
        reg.passwordConfirmField().type('makaveli');
        reg.subscribeField().click();
        reg.privacyButton().click();
        reg.continueButtonSecond().click();


    })

})
