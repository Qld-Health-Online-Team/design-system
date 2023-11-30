import consts from "../../consts";
let {url} = consts;
describe("Banner tests", () => {

    beforeEach(() => {
        cy.visit(`${url}component-banner_advanced.html`);
    });

    it("Banner advanced renders correctly", () => { //unit test
        cy.get('.qld__banner.qld__banner__advanced').should('exist');
        cy.get('.qld__banner__wrapper').should('exist');
        cy.get('.qld__banner__main').should('exist');
        cy.get('.qld__banner__hero').should('exist');
        cy.get('.qld__banner__content').should('exist');
    })

    it("Banner advanced renders background color ", () => { //unit test
        cy.get('section.qld__banner.qld__banner__advanced').then(($background) => {
            if ($background.hasClass('.qld__banner--alt')) {
                cy.get('.qld__banner--alt').should('exist');
            } else if ($background.hasClass('.qld__banner--dark')) {
                cy.get('.qld__banner--dark').should('exist');
            } else if ($background.hasClass('.qld__banner--dark-alt')) {
                cy.get('.qld__banner--dark-alt').should('exist');
            }
        })
    })

    it("Banner advanced renders hero image", () => {
        cy.get('.qld__banner__hero')
    }) 

    it("Banner breadcrumbs render correctly", () => { //unit test
        cy.get('.qld__link-list.qld__link-list--inline').should('exist');
        cy.get('.qld__link-list.qld__link-list--inline > li').should('exist');
        cy.get('li').invoke('text').should('not.be.empty');
    })

    it("Banner <h1> heading is rendering correctly ", () => { //unit test
        cy.get('.qld__banner__content > h1').invoke('text').should('not.be.empty');
    })

   
});