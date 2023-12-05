// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import './commands';

Cypress.Commands.add('LoginWithPageSession', (email, pwd) => {
    cy.visit('https://dev-website-admin.tabungselalu.id/')
    cy.get("#email").type(email)
    cy.get("#password").type(pwd)
    cy.get("button[type='submit']").click()
    cy.get("span[class='ant-typography css-1e5wuiv']").should('include.text', 'Admin')
    })