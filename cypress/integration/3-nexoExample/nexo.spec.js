const { it } = require("mocha")
import registerPage from '../pageObject/register'

describe('hello google',() => {   

    let reg = new registerPage();

    beforeEach(() => {
        

        cy.visit('https://automationteststore.com/')

    })

    it('open new page', () => {

        reg.registerButton().click();
        cy.get('form#accountFrm button[type="submit"]').should('be.visible').click();
        cy.get('input#AccountFrm_firstname').type('Mario');
        cy.get('input#AccountFrm_lastname').type('Krastev');

    })

})
