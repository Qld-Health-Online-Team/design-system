
import consts from "../../consts";
let {url} = consts;

describe('Header Tests', () => {
    
    beforeEach(() => {
        cy.visit(`${url}component-accordion.html`);
    });
  
    it('should contain skip links', () => {
      cy.get('.qld__skip-link__link').should('have.length', 2);
    });
  
    it('should have pre-header elements', () => {
      cy.get('.qld__header__pre-header').should('exist');
      cy.get('.qld__header__cta-link').should('have.length', 2);
    });
  
    it('should click the first CTA link', () => {
      cy.get('.qld__header__cta-link').first().click();
    });
  
    it('should have main navigation controls', () => {
      cy.get('.qld__header__toggle-main-nav').should('have.length', 2);
    });
  
    it('should fill out and submit the search form', () => {
      cy.get('#qld__header__search-query').type('Cypress Testing');
      cy.get('.qld__btn--search').click();
    });
  
    it('should have a site name in the header', () => {
      cy.get('.qld__header__brand-image').should('exist');
      cy.get('.qld__header__heading').should('contain', 'Queensland Design System Starter');
    });
  
});
  
