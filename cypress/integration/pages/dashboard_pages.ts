export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    btn_addToCartBackpack = '#add-to-cart-sauce-labs-backpack'
    badgeCart = 'span[class="shopping_cart_badge"]'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
    }

    addToCartBackpack(){
        cy.get(this.btn_addToCartBackpack).click()
    }

    assert_addedToCart(){
        cy.get(this.badgeCart).should('exist')
        cy.get(this.badgeCart).should('be.visible')
    }
}