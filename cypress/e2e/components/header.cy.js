import consts from "../../consts";

let {url} = consts;

describe("Header test ", () => {

    beforeEach(() => {
        cy.visit(`${url}`);
    });

    it("Header renders correctly", () => { //unit test
        cy.get('header.qld__header').should('exist');
        cy.get('div.qld__header__main').should('exist');
        cy.get('span.qld__header__heading').should('exist');
    });

    it("Header should have search section", () => {
        cy.get('div.qld__header__search').should('exist');
    })

});
