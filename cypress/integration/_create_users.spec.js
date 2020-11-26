/// <reference types="cypress" />

function verifyThisIsMainPage () {
  cy.get('.center').should('have.text', ' Log in to your account')
  cy.get(':nth-child(3) > .ui > input').should('be.visible')   
  cy.get(':nth-child(4) > .ui > input').should('be.visible')  
  cy.get('.SubmitEditInput').should('have.text', 'Log In')
  cy.get('.horizontal').should('have.text', 'Or')
  cy.get('.labeled').should('have.text', 'Login with Office 365')
  cy.get('.LoginPage > :nth-child(1) > :nth-child(2)').should('have.text', 'Forgot password? Reset password')
  cy.get('.LoginPage > :nth-child(1) > :nth-child(3)').should('have.text', 'New to us? Sign up')
}

function registerUserInTenant (first_name, last_name, email, password) {
  	cy.get(':nth-child(3) > a').click()
    cy.get('.center').should('contain', 'Register')
    cy.get(':nth-child(3) > .ui').should('have.text', 'Import from Office 365')
    cy.get(':nth-child(4) > .ui > input').should('be.visible')
    cy.get(':nth-child(5) > .ui > input').should('be.visible')
    cy.get(':nth-child(6) > .ui > input').should('be.visible')
    cy.get(':nth-child(7) > .ui > input').should('be.visible')
    cy.get(':nth-child(8) > .ui > input').should('be.visible')
    cy.get(':nth-child(9) > .ui > input').should('be.visible')
    cy.get(':nth-child(10) > .ui > input').should('be.visible')
    cy.get(':nth-child(11)').should('have.text', 'I agree to terms and conditions*')
    cy.get('.message').should('have.text', 'Already registered? Log In')

    cy.get(':nth-child(4) > .ui > input').type(first_name)
    cy.get(':nth-child(5) > .ui > input').type(last_name)
    cy.get(':nth-child(8) > .ui > input').type(email)
    cy.get(':nth-child(9) > .ui > input').type(password)
    cy.get(':nth-child(10) > .ui > input').type(password)
    cy.get(':nth-child(11)').click()
    cy.get('.SubmitEditInput').should('have.text', 'Register')
    cy.get('.SubmitEditInput').click()

  }

describe('Register user in Tenant', () => {
  
  it('Visits admin tenant page', () => {
    cy.visit('http://admin.tenant.localhost')
    verifyThisIsMainPage()
  })

  it('Register users in tenant', () => {
    registerUserInTenant('admin', 'automation', 'admin@automation.pl', '+3gV/*V7c5q[LcV\\Q7')
    verifyThisIsMainPage()
    registerUserInTenant('normal', 'automation', 'normal@automation.pl', '+3gV/*V7c5q[LcV\\Q7')
    verifyThisIsMainPage()
  })

})