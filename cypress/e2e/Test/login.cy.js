describe('Test 1: Verify login functionality', () => {
    it('Should log into the app and navigate to products page', () => {
      cy.origin('https://www.saucedemo.com/', () => {
        cy.visit('/');
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        cy.get("#login-button").click();
        cy.get(".title").should("have.text", "Products");
        
      })
    });
  });
  