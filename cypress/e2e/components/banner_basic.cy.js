import consts from "../../consts";
let {url} = consts;
describe("Banner Basic Tests", () => {

    beforeEach(() => {
        cy.visit(`${url}component-banner_basic.html`);
    });

    it("Banner basic renders correctly", () => {
        cy.get(".qld__banner ").should("exist");
        cy.get(".qld__banner__basic").should("exist");
        cy.get(".qld__banner__wrapper").should("exist");
        cy.get(".qld__banner__hero").should("exist");
        cy.get(".qld__banner__content").should("exist");
        cy.get(".qld__banner__content h1").should("exist");
    })
});