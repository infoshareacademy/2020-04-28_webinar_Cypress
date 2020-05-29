// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


const getFetchPolyfill = async () => {
  const polyfillUrl = "https://unpkg.com/unfetch/dist/unfetch.umd.js";
  return await window.fetch(polyfillUrl).then(res => {
    if (res.ok) {
      return res.text();
    }
  });
};

Cypress.Commands.overwrite('visit', async (originalFn, url, options) => {
  let polyfill = !window.fetchPoly && (await getFetchPolyfill());

  const opts = Object.assign({}, options, {
    onBeforeLoad: (window, ...args) => {
      if (!window.fetchPoly) {
        delete window.fetch;
        window.eval(polyfill);
        window.fetchPoly = true;
        window.fetch = window.unfetch;
      }

      if (options && options.onBeforeLoad) {
        return options.onBeforeLoad(window, ...args);
      }
    },
  });

  return originalFn(url, opts);
});
