describe("Accordion tests ", () => {

    beforeEach(() => {
        cy.visit("http://localhost:8080/component-accordion.html");
    });


    it("Accordion button should show the correct class after being clicked on ", () => {
        cy.get("section.qld__accordion").first().click();

        cy.wait(1000);

        cy.get("section.qld__accordion")
            .first()
            .find("button")
            .should("have.class", "qld__accordion__title")
            .and("have.class", "js-qld__accordion")
            .and("have.class", "qld__accordion--open");
    });

    it("Accordion should expand after a click on it's title ", () => {
        let initialHeight;
        cy.get("section.qld__accordion")
            .first()
            .invoke("height")
            .then((height) => (initialHeight = height));

        cy.get("section.qld__accordion").first().click();

        cy.wait(1000);

        cy.get("section.qld__accordion")
            .first()
            .find("button")
            .should("have.class", "qld__accordion__title")
            .and("have.class", "js-qld__accordion")
            .and("have.class", "qld__accordion--open");

        cy.get("section.qld__accordion")
            .first()
            .invoke("height")
            .should((height) => expect(height).to.not.equal(initialHeight));
    });

    


});
