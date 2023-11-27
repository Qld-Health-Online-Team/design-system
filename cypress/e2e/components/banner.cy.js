import consts from "../../consts";
let {url} = consts;
describe("Banner tests", () => {

    beforeEach(() => {
        cy.visit(`${url}component-banner.html`);
    });

    it("Banner renders correctly", () => { //unit test
        cy.get('.qld__banner').should('exist');
        cy.get('.qld__banner__content').should('exist');
        cy.get('.qld__breadcrumbs').should('exist');
    })
});