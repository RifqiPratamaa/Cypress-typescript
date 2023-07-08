import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {CartPage} from "./pages/cart_pages"
import {CheckoutPage} from "./pages/checkout_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let cartPage = new CartPage()
let checkoutPage = new CheckoutPage()
const URL = 'https://www.saucedemo.com/'

it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})

it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})

//---------- Added Test Case ----------
it('Test Add Sauce Labs Backpack to Cart', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
    dashboardPage.addToCartBackpack()
    dashboardPage.assert_addedToCart()
    cartPage.assert_productOnCart()
})

it('Test Remove Sauce Labs Backpack from Cart', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
    dashboardPage.addToCartBackpack()
    dashboardPage.assert_addedToCart()
    cartPage.assert_productOnCart()
    cartPage.assert_removeProductOnCart()
})

it('Test Complete Checkout Sauce Labs Backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
    dashboardPage.addToCartBackpack()
    dashboardPage.assert_addedToCart()
    cartPage.assert_productOnCart()
    checkoutPage.clickCheckoutBackpack()
    checkoutPage.assert_checkoutPage()
    checkoutPage.continueOverview('Jihan', 'Fahira', '14045')
    checkoutPage.assert_checkoutOverviewPage()
    checkoutPage.clickFinishCheckout()
    checkoutPage.assert_finishCheckout()
})