/// <reference types="cypress" />

context('Play with cypress', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');

  })


  it('Show greetings with name', () => {

    // cy.get('.suggested-id').contains('mojombo');

    cy.get('[data-cy=button-config]')
      .click();

    cy.get('[data-cy=input-greetings]')
      .clear()
      .type('Nihao Nihao Nihao Nihao Nihao Nihao Nihao Nihao Nihao')
      .should('have.value', 'Nihao Nihao Nihao Nihao Nihao Nihao Nihao Nihao Nihao');

    cy.get('[data-cy=button-ok]')
      .click();

    // https://on.cypress.io/type
    cy.get('[data-cy=input-firstName]')
      .type('Alex Alex Alex AlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlex')
      .should('have.value', 'Alex Alex Alex AlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlex');

    cy.get('[data-cy=input-lastName]')
      .type('BobBobBobBobBobBobBobBobBobBobBob')
      .should('have.value', 'BobBobBobBobBobBobBobBobBobBobBob');

    cy.get('[data-cy=button-hi]')
      .click();

    cy.get('[data-cy=greetings]')
      .contains('Nihao Nihao Nihao Nihao Nihao Nihao Nihao Nihao Nihao, Alex Alex Alex AlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlexAlex BobBobBobBobBobBobBobBobBobBobBob');

  })
})
