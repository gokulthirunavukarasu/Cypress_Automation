// const myEnv = Cypress.env("Enviroment")

class AdminLogin{
    static adminLogin()
     {
        cy.fixture('Test').then(function (data) {
            this.data = data
        cy.visit(this.data.login.url)
       })
        cy.fixture('Locators').then(function (locator) {
            this.locator = locator
            cy.wait(2000)
     cy.contains('Log in to your account').should('be.visible')
     cy.xpath(this.locator.login.username).type(this.data.login.adminUsername)
     cy.xpath(this.locator.login.password).type(this.data.login.adminPassword)
     cy.xpath(this.locator.login.loginBtn).click()  
    })
     }
     
}
export default AdminLogin;