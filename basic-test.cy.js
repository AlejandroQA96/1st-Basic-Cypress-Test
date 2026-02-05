describe('Basic Cypress Test', () => {
    it('Visits the Cypress example site and navigates to a page',() => {
       // Visit the homepage
        cy.visit('https://the-internet.herokuapp.com');
        // Click on the "Drag and Drop" link
        cy.contains('Drag and Drop').click();
        // Verify that the URL is correct
        cy.url().should('include', '/drag_and_drop');
        // Assert the page contains specific text
            cy.contains('Drag and Drop').should('be.visible');
        });
    });