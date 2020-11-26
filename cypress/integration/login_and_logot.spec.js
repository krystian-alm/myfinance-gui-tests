/// <reference types="cypress" />

function verifyThisIsMainPage () {
  	cy.get('.teal').should('have.text', ' Log in to your account')
    cy.get(':nth-child(1) > .ui > input').should('be.visible')   
    cy.get(':nth-child(2) > .ui > input').should('be.visible')  
    cy.get('.stacked > :nth-child(3)').should('have.text', 'Log in')
    cy.get('.labeled').should('have.text', 'Login with Office 365')
  }

function loginToMyFinance (first_name, last_name, email, password) {
	cy.get(':nth-child(1) > .ui > input').type(email)
  cy.get(':nth-child(2) > .ui > input').type(password)
  cy.get('.stacked > :nth-child(3)').click()
  cy.get('.UserDetails__UserName-hHrCkX').should('have.text', first_name + " " + last_name)
	cy.get(':nth-child(1) > .content').should('contain', 'Timelogs:')
	cy.get(':nth-child(2) > .content').should('contain', 'Costs:')
	cy.get(':nth-child(3) > .content').should('contain', 'Contributions:')
	cy.get(':nth-child(4) > .content').should('contain', 'Invoice:')
	cy.get('.PhotoMenuButton__Wrapper-eZqAMy').should('have.text', 'Log out')
}  

function logoutFromMyFinance () {
	cy.get('.PhotoMenuButton__Wrapper-eZqAMy').click()
	verifyThisIsMainPage()
}

describe('Login and Logout from myFinance', () => {
  
  it('Visits myFinance page', () => {
    cy.visit('http://myfinance.localhost')
    verifyThisIsMainPage()
  })

  it('Login and logout from myFinance', () => {
  	loginToMyFinance('admin', 'automation', 'admin@automation.pl', '+3gV/*V7c5q[LcV\\Q7')
  	logoutFromMyFinance()
  	loginToMyFinance('normal', 'automation', 'normal@automation.pl', '+3gV/*V7c5q[LcV\\Q7')
  	logoutFromMyFinance()
  })
})