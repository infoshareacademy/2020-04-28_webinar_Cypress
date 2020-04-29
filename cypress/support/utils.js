const addNewItem = (item) => {
  cy.get('input.new-todo').type(item).type('{enter}');
};

export {addNewItem}
