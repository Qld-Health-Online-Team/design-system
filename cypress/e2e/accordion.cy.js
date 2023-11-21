describe("Accordion tests ", () => {

    beforeEach(() => {
        cy.visit("http://localhost:8080/component-accordion.html");
    });

    it("Accordion renders correctly", () => { //unit test
        cy.get('.qld__accordion').should('exist');
        cy.get('.qld__accordion__title').should('exist');
        cy.get('.qld__accordion__body').should('exist');
    });

    it("Accordion's title displays correctly", () => { //unit test
        cy.get('button.qld__accordion__title.js-qld__accordion').first().invoke('text').then((buttonContent) => {
            // Get the value of the text field by its name attribute
            cy.get('input[name="heading"]').first().invoke('val').then((textFieldValue) => {
              // Compare the values
              expect(textFieldValue.trim()).to.equal(buttonContent.trim());
            });
        });
    });

    it("Accordion's content collapsed (hidden) by default", () => { //behaviour 
        cy.get('section.qld__accordion').first().should('have.css', 'height', '58px').within(() => {
            cy.get('button.qld__accordion__title').should('have.class', 'qld__accordion--closed');
        });
    });
    
    it("All ccordions expands after clicking on the title and then it collapses after clicking again ", () => { //behaviur 
        cy.get("section.qld__accordion").each(($accordionSection, index) => {
            let initialHeight;
            cy.get($accordionSection)
                .first()
                .invoke("height")
                .then((height) => (initialHeight = height));

            cy.get($accordionSection).first().click();

            cy.wait(300);

            cy.get($accordionSection)
                .first()
                .find("button")
                .should("have.class", "qld__accordion__title")
                .and("have.class", "js-qld__accordion")
                .and("have.class", "qld__accordion--open");

            cy.get($accordionSection)
                .first()
                .invoke("height")
                .should((height) => expect(height).to.not.equal(initialHeight));

            cy.get($accordionSection)
                .first()
                .within(() => {
                    cy.get("button.qld__accordion__title").click();
                });

            cy.wait(300);

            cy.get($accordionSection)
                .first()
                .find("button")
                .should("have.class", "qld__accordion__title")
                .and("have.class", "js-qld__accordion")
                .and("have.class", "qld__accordion--closed");

            cy.get($accordionSection)
                .first()
                .invoke("height")
                .should((height) => expect(height).to.equal(initialHeight));
        });
    });

    // it("Accordions in a list are accessible through keyboard controls", () => {
    //     cy.get("div.qld__accordion-group").within(() => {
    //         cy.type();
    //         cy.get(":first").should("have.class", "amir")
    //     })

    // });

});
