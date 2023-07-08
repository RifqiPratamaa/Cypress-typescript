export class CartPage{
    linkCart = '.shopping_cart_link'
    btn_removeCart = '[data-test="remove-sauce-labs-backpack"]'
    badgeCart = 'span[class="shopping_cart_badge"]'

    assert_productOnCart(){
        cy.get(this.linkCart).click()
        cy.get('.inventory_item_name').should('be.visible')
        cy.get('.inventory_item_name').should('contain','Sauce Labs Backpack')
    }

    assert_removeProductOnCart(){
        cy.get(this.btn_removeCart).click()
        cy.get('.removed_cart_item').should('not.be.visible')
        cy.get(this.badgeCart).should('not.exist')
    }
}