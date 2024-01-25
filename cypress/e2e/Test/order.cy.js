describe('Test 3: Make an order with a total value between $30-$60', () => {
  it('Should log in and place an order with the specified total value', () => {
    cy.origin('https://www.saucedemo.com/', () => {
      cy.visit('/');
      cy.get("#user-name").type("standard_user");
      cy.get("#password").type("secret_sauce");
      cy.get("#login-button").click();
      cy.get(".title").should("have.text", "Products");
      let inventoryItemCount;

      cy.get('.inventory_item').its('length').then(count => {
        inventoryItemCount = count;
        let total=0;
        let skip = 0;
        cy.get('.inventory_item_price').each(($item) => {
          const itemPrice = $item.text().replace('$', '');
          if(total+parseFloat(itemPrice)<=60){
            total=total+parseFloat(itemPrice);
            cy.get('[id*="add-to-cart"]:lt('+(1+skip)+')').click({ multiple: true });
          }
          else{
            skip=skip+1;
          }
        });

        
      });


      cy.get('.shopping_cart_link').click();
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
