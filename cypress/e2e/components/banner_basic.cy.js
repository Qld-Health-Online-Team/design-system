import consts from "../../consts";
let {url} = consts;
describe("Banner Basic Tests", () => {

    beforeEach(() => {
        cy.visit(`${url}component-banner_basic.html`);
    });

    it("Banner basic renders correctly", () => {//unit test
        cy.get(".qld__banner ").should("exist");
        cy.get(".qld__banner__basic").should("exist");
        cy.get(".qld__banner__wrapper").should("exist");
        cy.get(".qld__banner__hero").should("exist");
        cy.get(".qld__banner__content").should("exist");
        
    });

    it("Banner title dispalys correctly", () => {//unit test
        cy.get(".qld__banner__content h1").should("exist");
    })
});