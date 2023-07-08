export class CheckoutPage{
    btn_checkout = '[data-test="checkout"]'
    txt_firstName = '[data-test="firstName"]'
    txt_lastName = '[data-test="lastName"]'
    txt_postalCode = '[data-test="postalCode"]'
    btn_continue = '[data-test="continue"]'
    btn_finish = '[data-test="finish"]'

    clickCheckoutBackpack(){
        cy.get(this.btn_checkout).click()
    }

    assert_checkoutPage(){
        cy.get('.title').should('be.visible')
        cy.get('.title').should('contain','Checkout: Your Information')
    }
    
    inputFirstName(firstName: string){
        cy.get(this.txt_firstName).type(firstName)
    }
    inputLastName(lastName: string){
        cy.get(this.txt_lastName).type(lastName)
    }
    inputPostalCode(postalCode: string){
        cy.get(this.txt_postalCode).type(postalCode)
    }

    clickContinueCheckout(){
        cy.get(this.btn_continue).click()
    }

    continueOverview(firstName : string, lastName : string, postalCode : string){
        this.inputFirstName(firstName)
        this.inputLastName(lastName)
        this.inputPostalCode(postalCode)
        this.clickContinueCheckout()
    }

    assert_checkoutOverviewPage(){
        cy.get('.title').should('be.visible')
        cy.get('.title').should('contain','Checkout: Overview')
        cy.get('.inventory_item_name').should('be.visible')
        cy.get('.summary_info > :nth-child(1)').invoke('text').should('contain','Payment Information')
        cy.get('.summary_info > :nth-child(2)').should('be.visible')
        cy.get('.summary_info > :nth-child(3)').invoke('text').should('contain','Shipping Information')
        cy.get('.summary_info > :nth-child(4)').should('be.visible')
        cy.get('.summary_info > :nth-child(5)').invoke('text').should('contain','Price Total')
        cy.get('.summary_subtotal_label').invoke('text').should('contain','Item total: $')
        cy.get('.summary_tax_label').invoke('text').should('contain','Tax: $')
        cy.get('.summary_total_label').invoke('text').should('contain','Total: $')
    }
    
    clickFinishCheckout(){
        cy.get(this.btn_finish).click()
    }

    assert_finishCheckout(){
        cy.get('.complete-header').should('have.text','Thank you for your order!')
    }
}