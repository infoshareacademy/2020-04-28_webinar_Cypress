import {addNewItem} from "../../support/utils";
import {addItem} from "../../utils/todo.actions";

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
      // const firstItem = "first Item";
      // const secondItem = "second Item";
      // const thirdItem = "third Item";

      cy.fixture(`todo-${Cypress.env("ENV")}`).then(data => {
        addNewItem(data.firstItem);
        addNewItem(data.secondItem);
        addNewItem(data.thirdItem);

        // cy.get('.todo-list li').eq(0).should('contain.text', firstItem);
        // cy.get('.todo-list li').eq(1).should('contain.text', secondItem);
        // cy.get('.todo-list li').eq(2).should('contain.text', thirdItem);


        cy.get('.todo-list li').then((elements) => {
          console.log(elements);
          expect(elements).to.have.length(3)

          expect(elements[0]).to.contains.text(data.firstItem)
          expect(elements[1]).to.contains.text(data.secondItem)
          expect(elements[2]).to.contains.text(data.thirdItem)

        })



      });


    })
  })


  context("Request and route", () => {
    beforeEach(() => {
      cy.visit('')
    })


    it('Request demo', () => {
      cy.server();

      cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {
        console.log(response);

        expect(response.body).to.have.length(10);
        expect(response.status).to.be.equal(200);

      })

    })

    it('Route demo', () => {
      cy.server();


      cy.route({
        url: '/users',
        status: 400,
        response: {message: "error"},
        onRequest: (requestData) => {
          console.log(requestData)

          // expect('').to.be
        }
      }).as('getUsersRequest');

      cy.get('#save').click()

      cy.wait('@getUsersRequest').then(response => {
        expect(response.status).to.be.equal(400)
      })
    })


  })

  context('App actions demo', () => {
    beforeEach(() => {
      cy.visit('')
    });

    it.only('app actions demo', () => {
      addItem('item 1');
      addItem('item 2');
      addItem('item 3');
    })
  })



});
