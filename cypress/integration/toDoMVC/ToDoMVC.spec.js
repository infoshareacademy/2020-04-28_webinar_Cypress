import {addNewItem} from "../../support/utils";

describe('ToDo App', () => {
  context('When page initially loaded', () => {
    beforeEach(() => {
      cy.visit('');
    });

    it('header of the page should be visible and have proper name', () => {
      cy.get('.header h1').should('be.visible').and('contain.text', 'todos')
    });

    it('input should have proper placeholder', () => {
      cy.get('input').should('have.attr', 'placeholder', 'What needs to be done?')
    })
  });

  context('When added new item', () => {
    beforeEach(() => {
      cy.visit('');
    });

    it('should be added only one item', () => {
      cy.get('input.new-todo').type('Hello!').type('{enter}')

      cy.get('.todo-list li').should('have.length', 1)
    });

    it('should add 3 items with proper order ', () => {
      const firstItem = "first Item";
      const secondItem = "second Item";
      const thirdItem = "third Item";

      addNewItem(firstItem);
      addNewItem(secondItem);
      addNewItem(thirdItem);

      cy.get('.todo-list li').eq(0).should('contain.text', firstItem)
      cy.get('.todo-list li').eq(1).should('contain.text', secondItem)
      cy.get('.todo-list li').eq(2).should('contain.text', thirdItem)
    })
  })
});
