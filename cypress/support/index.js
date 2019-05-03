// eslint-disable-next-line
import 'cypress-testing-library/add-commands'

Cypress.on('uncaught:exception', err => {
  cy.log('uncaught exception', err)
})
