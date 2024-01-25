describe('Test 2: Buy 2 items after filling the basket with 3 items', () => {
  it('Should log in, fill basket, and buy 2 items', () => {
    cy.origin('https://www.saucedemo.com/', () => {
      cy.visit('/');
      cy.get("#user-name").type("standard_user");
      cy.get("#password").type("secret_sauce");
      cy.get("#login-button").click();
      cy.get(".title").should("have.text", "Products");
      let inventoryItemCount;

      cy.get('.inventory_item').its('length').then(count => {
        inventoryItemCount = count;
        if (inventoryItemCount >= 3) {
          cy.log(`Number of elements with class 'inventory_item': ${inventoryItemCount}`);
          for (var i = 1; i < 4; i++) {
            cy.get('[id*="add-to-cart"]:lt(1)').click({ multiple: true });
          }
        }
        else {
          cy.log(`there are less than 3 items. It is': ${inventoryItemCount}`);
          throw new Error(`Data not sufficient.there are less than 3 items. It is': ${inventoryItemCount}`);
        }
      });

      cy.get('.shopping_cart_link').click();
      let cartitemCount;
      cy.get('[id*="remove-sauce-labs"]').its('length').then(count => {
        cartitemCount = count;
        if (cartitemCount == 3) {
          cy.log(`Number of item in cart is ${cartitemCount}`);
          
            cy.get('[id*="remove-sauce-labs"]:lt(1)').click({ multiple: true });
          
        }
        else {
          cy.log(`Cart item count is not 3. It is': ${cartitemCount}`);
          throw new Error(`Cart item count is not 3. It is': ${cartitemCount}`);

        }
      });

      cy.get('#checkout').click();
      cy.get("#first-name").type("John");
      cy.get("#last-name").type("Wick");
      cy.get("#postal-code").type("12345");

      cy.get('#continue').click();
      cy.get('#finish').click();
      cy.get('.complete-header').should("have.text", "Thank you for your order!");

    })
  });
});