// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Check fields is visible', () => {
    cy.get('[data-cy=plan]').should('be.visible')
    cy.get('[data-cy=to]').should('be.visible')
    cy.get('[data-cy=from]').should('be.visible')
    cy.get('[data-cy=time]').should('be.visible')
    cy.get('[data-cy=button]').should('be.visible')
  })

  it(`Check can't add values`, () => {
    cy.get('[data-cy=button]').click()

    cy.get('[data-cy=plan] > .q-field > .q-field__inner > .q-field__control').should('have.class', 'text-negative')
    cy.get('[data-cy=to] > .q-field > .q-field__inner > .q-field__control').should('have.class', 'text-negative')
    cy.get('[data-cy=from] > .q-field > .q-field__inner > .q-field__control').should('have.class', 'text-negative')
    cy.get('[data-cy=time] > .q-field__inner > .q-field__control').should('have.class', 'text-negative')
  })

    it(`Test first case`, () => {
      cy.get('[data-cy=plan] input').click().type('FaleMais 30{downarrow}{enter}')
      cy.get('[data-cy=from] input').click().type('011{downarrow}{enter}')
      cy.get('[data-cy=to] input').click().type('016{downarrow}{enter}')
      cy.get('[data-cy=time] input').click().type('20')

      cy.get('[data-cy=withPlan]').should(($div) => {
        expect($div.first()).to.contain('$ 0.00')
       })

       cy.get('[data-cy=withoutPlan]').should(($div) => {
         expect($div.first()).to.contain('$ 38.00')
       })

       cy.get('[data-cy=button]').click()

       cy.get('[data-cy=withPlan]').should(($div) => {
         expect($div.first()).to.contain('$ 0.00')
        })

        cy.get('[data-cy=withoutPlan]').should(($div) => {
          expect($div.first()).to.contain('$ 0.00')
        })
     })

     it(`Test second case`, () => {
      cy.get('[data-cy=plan] input').click().type('FaleMais 60{downarrow}{enter}')
      cy.get('[data-cy=from] input').click().type('011{downarrow}{enter}')
      cy.get('[data-cy=to] input').click().type('017{downarrow}{enter}')
      cy.get('[data-cy=time] input').click().type('80')

      cy.get('[data-cy=withPlan]').should(($div) => {
        expect($div.first()).to.contain('$ 37.40')
       })

       cy.get('[data-cy=withoutPlan]').should(($div) => {
         expect($div.first()).to.contain('$ 136.00')
       })

       cy.get('[data-cy=button]').click()

       cy.get('[data-cy=withPlan]').should(($div) => {
         expect($div.first()).to.contain('$ 0.00')
        })

        cy.get('[data-cy=withoutPlan]').should(($div) => {
          expect($div.first()).to.contain('$ 0.00')
        })
     })

     it(`Test Third case`, () => {
      cy.get('[data-cy=plan] input').click().type('FaleMais 120{downarrow}{enter}')
      cy.get('[data-cy=from] input').click().type('018{downarrow}{enter}')
      cy.get('[data-cy=to] input').click().type('011{downarrow}{enter}')
      cy.get('[data-cy=time] input').click().type('200')

      cy.get('[data-cy=withPlan]').should(($div) => {
        expect($div.first()).to.contain('$ 167.20')
       })

       cy.get('[data-cy=withoutPlan]').should(($div) => {
         expect($div.first()).to.contain('$ 380.00')
       })

       cy.get('[data-cy=button]').click()

       cy.get('[data-cy=withPlan]').should(($div) => {
         expect($div.first()).to.contain('$ 0.00')
        })

        cy.get('[data-cy=withoutPlan]').should(($div) => {
          expect($div.first()).to.contain('$ 0.00')
        })
     })

     it(`Test Foruth case`, () => {
      cy.get('[data-cy=plan] input').click().type('FaleMais 30{downarrow}{enter}')
      cy.get('[data-cy=from] input').click().type('018{downarrow}{enter}')
      cy.get('[data-cy=to] input').click().type('017{downarrow}{enter}')
      cy.get('[data-cy=time] input').click().type('100')

      cy.get('[data-cy=withPlan]').should(($div) => {
        expect($div.first()).to.contain('$ 0.00')
       })

       cy.get('[data-cy=withoutPlan]').should(($div) => {
         expect($div.first()).to.contain('$ 0.00')
       })

       cy.get('[data-cy=button]').click()

       cy.get('[data-cy=withPlan]').should(($div) => {
         expect($div.first()).to.contain('$ 0.00')
        })

        cy.get('[data-cy=withoutPlan]').should(($div) => {
          expect($div.first()).to.contain('$ 0.00')
        })
     })
})
