const addItem = (item) => {
  cy.window().its('model').invoke('addTodo', item)
};

export {addItem};
