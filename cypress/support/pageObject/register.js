class registerPage {

    registerButton(){
        return cy.get('ul#customer_menu_top a').should('be.visible')
    }

    continueButton(){
        return cy.get('form#accountFrm button[type="submit"]').should('be.visible');
    }

    firstNameField(){
        return cy.get('input#AccountFrm_firstname').should('be.visible');
    }

    lastNameField(){
        return cy.get('input#AccountFrm_lastname').should('be.visible');
    }

    emailField(){
        return cy.get('input#AccountFrm_email').should('be.visible');
    }

    addressField(){
        return cy.get('input#AccountFrm_address_1').should('be.visible');
    }

    cityField(){
        return cy.get('input#AccountFrm_city').should('be.visible');
    }

    regionField(){
        return cy.get('select#AccountFrm_zone_id').should('be.visible');
    }

    zipCodeField(){
        return cy.get('input#AccountFrm_postcode').should('be.visible');
    }

    loginNameField(){
        return cy.get('input#AccountFrm_loginname').should('be.visible');
    }

    passwordField(){
        return cy.get('input#AccountFrm_password').should('be.visible');
    }

    passwordConfirmField(){
        return cy.get('input#AccountFrm_confirm').should('be.visible');
    }

    subscribeField(){
        return cy.get('input#AccountFrm_newsletter0').should('be.visible');
    }

    privacyButton(){
        return cy.get('input#AccountFrm_agree').should('be.visible');
    }

    continueButtonSecond(){
        return cy.get('form#AccountFrm button[type="submit"]').should('be.visible');
    }

    getRandomNumber(){

        const uuid = () => Cypress._.random(0, 1e6);
        return uuid()

    }


}

export default registerPage;